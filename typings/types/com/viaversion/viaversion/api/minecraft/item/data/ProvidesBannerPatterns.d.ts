import type { HolderSet } from '../../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ProvidesBannerPatterns extends Record {
    static TYPE: Type<ProvidesBannerPatterns>;
    constructor(patterns: HolderSet)
    // private patterns: HolderSet;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    patterns(): HolderSet;
    toString(): string;
}