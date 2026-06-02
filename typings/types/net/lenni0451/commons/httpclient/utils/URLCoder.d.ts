import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class URLCoder extends Object {
    static decode(paramarg0: string): string;
    static decode(paramarg0: string, paramarg1: Charset): string;
    static encode(paramarg0: string): string;
    static encode(paramarg0: string, paramarg1: Charset): string;
    private constructor()
}