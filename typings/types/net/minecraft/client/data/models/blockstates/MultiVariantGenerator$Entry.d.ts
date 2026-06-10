import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { PropertyDispatch } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch.d.ts'
import type { PropertyValueList } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyValueList.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
export class MultiVariantGenerator$Entry extends Record {
    private constructor(properties: PropertyValueList, variant: MultiVariant)
    // private properties: PropertyValueList;
    // private variant: MultiVariant;
    apply(stage: PropertyDispatch<(param0: Object | null) => Object | null>): Stream<MultiVariantGenerator$Entry>;
    apply(mutator: (param0: Object | null) => Object | null): Stream<MultiVariantGenerator$Entry>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    properties(): PropertyValueList;
    toString(): string;
    variant(): MultiVariant;
}