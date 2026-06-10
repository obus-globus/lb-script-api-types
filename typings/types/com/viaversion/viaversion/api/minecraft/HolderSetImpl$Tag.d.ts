import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { HolderSet } from '../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { Int2IntFunction } from '../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HolderSetImpl$Tag extends Record implements HolderSet {
    static fromTag(paramarg0: Tag, paramarg1: (param0: string) => number): HolderSet;
    static of(paramarg0: number[]): HolderSet;
    static of(paramarg0: string): HolderSet;
    constructor(tagKey: string)
    // private tagKey: string;
}