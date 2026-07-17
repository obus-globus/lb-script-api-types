import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class Credentials extends Object {
    static INSTANCE: Credentials;
    static basic(paramarg0: string, paramarg1: string): string;
    static basic(username: string, password: string, charset: Charset): string;
    basic(username: string, password: string, charset?: Charset): string;
}