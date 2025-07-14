
import {z} from "zod";

export const sendOtpSchema = z.object({
    phone:z
    .string()
    .min(10, "Phone number must be at least 10 characters long")
    .max(10)
    .regex(/^[6-9]\d{9}$/, "Invalid Indian phone number")

})

export type SendOtpInput = z.infer<typeof sendOtpSchema>
