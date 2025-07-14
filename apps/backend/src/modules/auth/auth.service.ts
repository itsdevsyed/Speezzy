import { prisma } from '../../config/db'
import {generateOtp} from '../../utils/generateOtp'
import { SendOtpInput} from './auth.schema'


export class AuthServices {
    static async sendOtp(data: SendOtpInput) {
    const otp = generateOtp()

    const expiryj = new Date.(Date.now() + 3 * 60 * 1000 )
    await prisma.otpRequest.create({
        data: {
            phone,
            code: otp,
            expiresAt:expiry
}

{}
