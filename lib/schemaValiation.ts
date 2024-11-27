import { z } from "zod";

export const subjectSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "subject name is required"),
  teachers: z.array(z.string()),
});
