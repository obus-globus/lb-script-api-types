import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface PasswordDecryptor extends Object{
    decryptPassword(password: string): string;
}