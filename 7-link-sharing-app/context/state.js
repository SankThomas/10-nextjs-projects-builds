"use client";

import { useState, createContext } from "react";
import { toast } from "sonner";

export const StateContext = createContext();

export default function State({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [youtubeUsername, setYoutubeusername] = useState("");

  const platforms = [
    {
      title: "YouTube",
      url: `https://youtube.com/${youtubeUsername}`,
    },
  ];

  const handleYoutubeUsername = (e) => {
    setYoutubeusername(e.target.value);
  };

  const handleLinkName = (e) => {
    setLinkName(e.target.value);
  };

  const handleLinkUrl = (e) => {
    setLinkUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!linkName || !linkUrl) {
      toast.error("Invalid link", {
        description: "Enter a valid link name or url",
      });
    } else {
      const newLink = {
        id: new Date().getTime().toString(),
        name: linkName,
        url: linkUrl,
      };
      setLinks([newLink, ...links]);
      setLinkName("");
      setLinkUrl("");
      toast.success("Success", { description: "You have created a new link" });
    }
  };

  const context = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    linkName,
    linkUrl,
    handleLinkName,
    handleLinkUrl,
    setLinkUrl,
    links,
    handleSubmit,
    youtubeUsername,
    setYoutubeusername,
    platforms,
    handleYoutubeUsername,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
}
