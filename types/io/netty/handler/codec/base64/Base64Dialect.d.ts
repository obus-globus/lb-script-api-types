import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Base64Dialect extends Enum<Base64Dialect> {
    static ORDERED: Base64Dialect;
    static STANDARD: Base64Dialect;
    static URL_SAFE: Base64Dialect;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Base64Dialect;
    static values(): (Object | null)[];
    private constructor(arg2: number[], arg3: number[], arg4: boolean)
    // private alphabet: number[];
    // private breakLinesByDefault: boolean;
    // private decodabet: number[];
    name(): "STANDARD" | "URL_SAFE" | "ORDERED";
}