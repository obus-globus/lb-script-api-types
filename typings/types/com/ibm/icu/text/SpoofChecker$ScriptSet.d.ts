import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../java/nio/LongBuffer.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
export class SpoofChecker$ScriptSet extends BitSet {
    static valueOf(paramarg0: number[]): BitSet;
    static valueOf(paramarg0: ByteBuffer): BitSet;
    static valueOf(paramarg0: LongBuffer): BitSet;
    static valueOf(paramarg0: number[]): BitSet;
    constructor()
    and(arg0: BitSet): void;
    and(arg0: number): void;
    appendStringTo(arg0: StringBuilder): void;
    isFull(): boolean;
    setAll(): void;
    toString(): string;
}