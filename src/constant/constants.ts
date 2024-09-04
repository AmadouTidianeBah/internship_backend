import bcrypt from 'bcrypt'

export enum UserRole {
    STUDENT = 'STUDENT',
    COMPANY = 'COMPANY',
    ADMIN = 'ADMIN'
}

export enum ApplicationStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
}

const salt = 10
export const saltGenerated = bcrypt.genSaltSync(salt)