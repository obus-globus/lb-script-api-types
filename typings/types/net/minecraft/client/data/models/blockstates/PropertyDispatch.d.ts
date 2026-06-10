import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { PropertyDispatch$C1 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C1.d.ts'
import type { PropertyDispatch$C2 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C2.d.ts'
import type { PropertyDispatch$C3 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C3.d.ts'
import type { PropertyDispatch$C4 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C4.d.ts'
import type { PropertyDispatch$C5 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C5.d.ts'
import type { PropertyValueList } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyValueList.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export abstract class PropertyDispatch<V extends Object | number | string | boolean> extends Object {
    static initial(paramproperty1: Property<Object>, paramproperty2: Property<Object>, paramproperty3: Property<Object>, paramproperty4: Property<Object>, paramproperty5: Property<Object>): PropertyDispatch$C5<MultiVariant, Object, Object, Object, Object, Object>;
    static initial(paramproperty1: Property<Object>, paramproperty2: Property<Object>, paramproperty3: Property<Object>, paramproperty4: Property<Object>): PropertyDispatch$C4<MultiVariant, Object, Object, Object, Object>;
    static initial(paramproperty1: Property<Object>, paramproperty2: Property<Object>, paramproperty3: Property<Object>): PropertyDispatch$C3<MultiVariant, Object, Object, Object>;
    static initial(paramproperty1: Property<Object>, paramproperty2: Property<Object>): PropertyDispatch$C2<MultiVariant, Object, Object>;
    static initial(paramproperty1: Property<Object>): PropertyDispatch$C1<MultiVariant, Object>;
    static modify(paramproperty1: Property<Object>, paramproperty2: Property<Object>, paramproperty3: Property<Object>, paramproperty4: Property<Object>, paramproperty5: Property<Object>): PropertyDispatch$C5<(param0: Object | null) => Object | null, Object, Object, Object, Object, Object>;
    static modify(paramproperty1: Property<Object>, paramproperty2: Property<Object>, paramproperty3: Property<Object>, paramproperty4: Property<Object>): PropertyDispatch$C4<(param0: Object | null) => Object | null, Object, Object, Object, Object>;
    static modify(paramproperty1: Property<Object>, paramproperty2: Property<Object>, paramproperty3: Property<Object>): PropertyDispatch$C3<(param0: Object | null) => Object | null, Object, Object, Object>;
    static modify(paramproperty1: Property<Object>, paramproperty2: Property<Object>): PropertyDispatch$C2<(param0: Object | null) => Object | null, Object, Object>;
    static modify(paramproperty1: Property<Object>): PropertyDispatch$C1<(param0: Object | null) => Object | null, Object>;
    constructor()
    // private values: Map<PropertyValueList, V>;
    getDefinedProperties(): Property<Object>[];
    getEntries(): Map<PropertyValueList, V>;
    putValue(key: PropertyValueList, variant: V): void;
    // private verifyComplete(): void;
}