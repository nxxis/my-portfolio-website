import { z } from "zod";
import type { Lang } from "@/app/_components/language-context";

const messages: Record<Lang, Record<string, string>> = {
  en: {
    nameRequired: "Name is required",
    nameMin: "Name must be 3 chars",
    emailRequired: "Email is required",
    emailInvalid: "Invalid email",
    subjectRequired: "Subject is required",
    subjectMin: "Subject must be at least 3 characters",
    messageRequired: "Message is required",
    messageMin: "Message must be at least 3 characters",
  },
  ne: {
    nameRequired: "नाम आवश्यक छ",
    nameMin: "नाम कम्तीमा ३ अक्षरको हुनुपर्छ",
    emailRequired: "इमेल आवश्यक छ",
    emailInvalid: "अमान्य इमेल",
    subjectRequired: "विषय आवश्यक छ",
    subjectMin: "विषय कम्तीमा ३ अक्षरको हुनुपर्छ",
    messageRequired: "सन्देश आवश्यक छ",
    messageMin: "सन्देश कम्तीमा ३ अक्षरको हुनुपर्छ",
  },
};

export function getMailFormSchema(lang: Lang = "en") {
  const m = messages[lang];
  return z.object({
    name: z
      .string()
      .refine((val) => val.trim() !== "", { message: m.nameRequired })
      .refine((val) => val.trim().length >= 3, { message: m.nameMin }),

    email: z.preprocess(
      (val) => (typeof val === "string" ? val.trim() : val),
      z.string().min(1, m.emailRequired).email(m.emailInvalid)
    ),

    subject: z
      .string()
      .refine((val) => val.trim() !== "", { message: m.subjectRequired })
      .refine((val) => val.trim().length >= 3, { message: m.subjectMin }),

    message: z
      .string()
      .refine((val) => val.trim() !== "", { message: m.messageRequired })
      .refine((val) => val.trim().length >= 3, { message: m.messageMin }),
  });
}

const mailFormSchema = getMailFormSchema("en");
export default mailFormSchema;
