import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SpoofChecker$SpoofData extends Object {
    static getDefault(): SpoofChecker$SpoofData;
    private constructor()
    private constructor(bytes: ByteBuffer)
    // private fCFUKeys: number[];
    // private fCFUStrings: string;
    // private fCFUValues: number[];
    appendValueTo(index: number, dest: StringBuilder): void;
    codePointAt(index: number): number;
    confusableLookup(inChar: number, dest: StringBuilder): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    length(): number;
    // private readData(bytes: ByteBuffer): void;
}