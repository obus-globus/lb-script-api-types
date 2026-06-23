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
    static initial(paramproperty1: Property<any>, paramproperty2: Property<any>, paramproperty3: Property<any>, paramproperty4: Property<any>, paramproperty5: Property<any>): PropertyDispatch$C5<MultiVariant, any, any, any, any, any>;
    static initial(paramproperty1: Property<any>, paramproperty2: Property<any>, paramproperty3: Property<any>, paramproperty4: Property<any>): PropertyDispatch$C4<MultiVariant, any, any, any, any>;
    static initial(paramproperty1: Property<any>, paramproperty2: Property<any>, paramproperty3: Property<any>): PropertyDispatch$C3<MultiVariant, any, any, any>;
    static initial(paramproperty1: Property<any>, paramproperty2: Property<any>): PropertyDispatch$C2<MultiVariant, any, any>;
    static initial(paramproperty1: Property<any>): PropertyDispatch$C1<MultiVariant, any>;
    static modify(paramproperty1: Property<any>, paramproperty2: Property<any>, paramproperty3: Property<any>, paramproperty4: Property<any>, paramproperty5: Property<any>): PropertyDispatch$C5<(param0: Object | null) => Object | null, any, any, any, any, any>;
    static modify(paramproperty1: Property<any>, paramproperty2: Property<any>, paramproperty3: Property<any>, paramproperty4: Property<any>): PropertyDispatch$C4<(param0: Object | null) => Object | null, any, any, any, any>;
    static modify(paramproperty1: Property<any>, paramproperty2: Property<any>, paramproperty3: Property<any>): PropertyDispatch$C3<(param0: Object | null) => Object | null, any, any, any>;
    static modify(paramproperty1: Property<any>, paramproperty2: Property<any>): PropertyDispatch$C2<(param0: Object | null) => Object | null, any, any>;
    static modify(paramproperty1: Property<any>): PropertyDispatch$C1<(param0: Object | null) => Object | null, any>;
    constructor()
    // private values: Map<PropertyValueList, V>;
    getDefinedProperties(): Property<any>[];
    getEntries(): Map<PropertyValueList, V>;
    putValue(key: PropertyValueList, variant: V): void;
    // private verifyComplete(): void;
}