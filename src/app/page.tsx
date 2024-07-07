"use client";
import "regenerator-runtime/runtime";
import { ChangeEvent, useState } from "react";
import TextArea from "../components/Input/TextArea";
import SpeechRecognitionComponent from "../components/Speech/SpeechRecognition";
import { IconCopy, IconFileUpload, IconVolume } from "@tabler/icons-react";
import FileUpload from "@/components/Input/FileUpload";
import LinkPaste from "@/components/Input/LinkPaste";
import useTranslate from "@/hooks/useTranslate";
import LanguageSelector from "@/components/Input/LanguageSelector";
import { CategoryLinks } from "@/components/categoryLinks";
export default function Home() {
  const [sourceText, setSourceText] = useState("");

  const [copied, setCopied] = useState<boolean>(false);
  const [favourite, setFavourite] = useState<boolean>(false);
  const [languages] = useState<Array<string>>([
    "English",
    "Spanish",
    "French",
    "German",
    "Hindi",
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState<string>("Spanish");

  const targetText = useTranslate({ sourceText, selectedLanguage });

  console.log(targetText);

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    console.log(file);
  };

  const handleLinkPaste = (text: string) => {};

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen w-full">
        <div className=" h-full max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">
              Language
            </h1>
            <p className="mt-3 text-neutral-400">
              Translating words, bridging cultures.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl bg-red-400 relative">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="relative z-10 flex flex-col space-x-3 border rounded-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20 shadow-lg ">
                  <TextArea
                    id={"source-language"}
                    value={sourceText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setSourceText(e.target.value)
                    }
                    placeholder={"Source Language"}
                  />
                  <div className="flex justify-between w-full">
                    <div className="flex space-x-2 cursor-pointer">
                      <SpeechRecognitionComponent
                        setSourceText={setSourceText}
                      />
                      <IconVolume
                        size={22}
                        onClick={() => handleAudioPlayback(sourceText)}
                      />
                      <FileUpload handleFileUpload={handleFileUpload} />
                      <LinkPaste handleLinkPaste={handleLinkPaste} />
                    </div>

                    <span className="text-sm pr-4">
                      {sourceText.length} / 2000
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col space-x-3 border rounded-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20 shadow-lg ">
                  <TextArea
                    id="target-language"
                    value={targetText}
                    onChange={() => {}}
                    placeholder="Target Language"
                  />
                  <div className="flex justify-between w-full">
                    <div className="flex  items-center space-x-2 cursor-pointer">
                      <LanguageSelector
                        languages={languages}
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                      />
                      <IconVolume
                        size={22}
                        onClick={() => handleAudioPlayback(targetText)}
                      />
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <IconCopy size={22} onClick={handleCopyToClipboard} />
                      {copied && (
                        <span className="text-xs bg-green-500">Copied!</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
