import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FunLongAnd5 } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/functions/FunLongAnd5.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
export interface RegionBasedStorageSectionExtended<R extends Object | number | string | boolean> extends Object {
    lithium$getChunkYMaxInclusive(): number;
    lithium$getChunkYMin(): number;
    lithium$getElementAt(arg0: number): Optional<R>;
    lithium$getFirstInRangeInChunkColumn<U extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: number, arg3: BlockPos, arg4: number, arg5: (param0: R, param1: BlockPos, param2: (param0: Holder<S>) => kotlin.Boolean, param3: (param0: BlockPos) => kotlin.Boolean, param4: T, param5: U) => unknown, arg6: (param0: Holder<S>) => kotlin.Boolean, arg7: (param0: BlockPos) => kotlin.Boolean, arg8: T): U;
    lithium$getInChunkColumn(arg0: number, arg1: number): R[];
    lithium$getNonEmptyPOISections(arg0: number, arg1: number): BitSet;
}