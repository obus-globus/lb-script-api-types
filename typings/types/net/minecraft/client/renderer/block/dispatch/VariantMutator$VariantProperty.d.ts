import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Variant } from '../../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
export interface VariantMutator$VariantProperty<T extends Object | number | string | boolean> extends Object {
    apply(input: Variant, value: T): Variant;
    withValue(value: T): (param0: Object | null) => Object | null;
}