import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BinaryVersion$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion$Companion.d.ts'
export abstract class BinaryVersion extends Object {
    static Companion: BinaryVersion$Companion;
    constructor(arg0: number[])
    readonly major: number;
    readonly minor: number;
    // private numbers: number[];
    // private patch: number;
    // private rest: number[];
    equals(arg0: Object | null): boolean;
    getMajor(): number;
    getMinor(): number;
    hashCode(): number;
    isAtLeast(arg0: number, arg1: number, arg2: number): boolean;
    isAtLeast(arg0: BinaryVersion): boolean;
    isAtMost(arg0: number, arg1: number, arg2: number): boolean;
    isCompatibleTo(arg0: BinaryVersion): boolean;
    toArray(): number[];
    toString(): string;
}