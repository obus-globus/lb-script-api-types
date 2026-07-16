import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { Variant } from '../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { VariantMutator } from '../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { WeightedList } from '../../../../../net/minecraft/util/random/WeightedList.d.ts'
export class MultiVariant extends Record {
    constructor(variants: WeightedList<Variant>)
    // private variants: WeightedList<Variant>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    toUnbaked(): BlockStateModel$Unbaked;
    variants(): WeightedList<Variant>;
    with(mutator: (param0: Variant) => Variant): MultiVariant;
}