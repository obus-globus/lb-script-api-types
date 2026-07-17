import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { FormBody } from '../okhttp3/FormBody.d.ts'
export class FormBody$Builder extends Object {
    constructor(charset?: Charset | null)
    // private charset: Charset | null;
    // private names: string[];
    // private values: string[];
    add(name: string, value: string): FormBody$Builder;
    addEncoded(name: string, value: string): FormBody$Builder;
    build(): FormBody;
}