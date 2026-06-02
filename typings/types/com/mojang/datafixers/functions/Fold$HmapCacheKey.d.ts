import type { Algebra } from '../../../../com/mojang/datafixers/types/families/Algebra.d.ts'
import type { RecursiveTypeFamily } from '../../../../com/mojang/datafixers/types/families/RecursiveTypeFamily.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Fold$HmapCacheKey extends Record {
    private constructor(family: RecursiveTypeFamily, newFamily: RecursiveTypeFamily, algebra: Algebra)
    // private algebra: Algebra;
    // private family: RecursiveTypeFamily;
    // private newFamily: RecursiveTypeFamily;
    algebra(): Algebra;
    equals(arg0: Object | null): boolean;
    family(): RecursiveTypeFamily;
    hashCode(): number;
    newFamily(): RecursiveTypeFamily;
    toString(): string;
}