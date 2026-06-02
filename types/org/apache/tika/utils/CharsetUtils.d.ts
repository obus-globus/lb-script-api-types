import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharsetUtils extends Object {
    static clean(paramarg0: string): string;
    static forName(paramarg0: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor()
}