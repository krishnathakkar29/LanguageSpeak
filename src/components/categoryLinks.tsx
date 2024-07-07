import {
  IconBriefcase,
  IconBulb,
  IconSchool,
  IconWriting,
  IconMoodSmile,
  IconHeart,
} from "@tabler/icons-react";

const categories = [
  { icon: IconBriefcase, label: "Business" },
  { icon: IconSchool, label: "Education" },
  { icon: IconBulb, label: "Creative" },
  { icon: IconHeart, label: "Health" },
  { icon: IconWriting, label: "Journaling" },
  { icon: IconMoodSmile, label: "Communication" },
];

export const CategoryLinks = () => {
  return (
    <div className="mt-10 sm:mt-20">
      {categories.map((item, index) => (
        <div
          className="inline-flex items-center gap-x-2 py-2 px-3 font-medium text-sm rounded-lg border border-gray-200 bg-neutral-900 text-white  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none m-1"
          key={index}
        >
          <item.icon size={40} />
          <p className="text-2xl">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
