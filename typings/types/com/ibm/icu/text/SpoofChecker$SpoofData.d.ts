import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SpoofChecker$SpoofData extends Object {
    static getDefault(): SpoofChecker$SpoofData;
    private constructor()
    private constructor(arg0: ByteBuffer)
    // private fCFUKeys: number[];
    // private fCFUStrings: string;
    // private fCFUValues: number[];
    appendValueTo(arg0: number, arg1: StringBuilder): void;
    codePointAt(arg0: number): number;
    confusableLookup(arg0: number, arg1: StringBuilder): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    length(): number;
    // private readData(arg0: ByteBuffer): void;
}