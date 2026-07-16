import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonEncoding extends Enum<JsonEncoding> {
    static UTF16_BE: JsonEncoding;
    static UTF16_LE: JsonEncoding;
    static UTF32_BE: JsonEncoding;
    static UTF32_LE: JsonEncoding;
    static UTF8: JsonEncoding;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonEncoding;
    static values(): JsonEncoding[];
    private constructor(arg2: string, arg3: boolean, arg4: number)
    // private _bigEndian: boolean;
    // private _bits: number;
    // private _javaName: string;
    bits(): number;
    getJavaName(): string;
    isBigEndian(): boolean;
    name(): "UTF8" | "UTF16_BE" | "UTF16_LE" | "UTF32_BE" | "UTF32_LE";
}