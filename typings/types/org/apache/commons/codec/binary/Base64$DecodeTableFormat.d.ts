import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Base64$DecodeTableFormat extends Enum<Base64$DecodeTableFormat> {
    static MIXED: Base64$DecodeTableFormat;
    static STANDARD: Base64$DecodeTableFormat;
    static URL_SAFE: Base64$DecodeTableFormat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Base64$DecodeTableFormat;
    static values(): Base64$DecodeTableFormat[];
    private constructor()
    name(): "STANDARD" | "URL_SAFE" | "MIXED";
}