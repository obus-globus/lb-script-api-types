import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Variant } from '../../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
export interface VariantMutator extends UnaryOperator<Variant>, Object{
    then(other: (param0: Object | null) => unknown): (param0: Object | null) => unknown;
}