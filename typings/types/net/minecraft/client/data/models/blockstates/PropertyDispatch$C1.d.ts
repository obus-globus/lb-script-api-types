import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { PropertyDispatch } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch.d.ts'
import type { PropertyDispatch$C2 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C2.d.ts'
import type { PropertyDispatch$C3 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C3.d.ts'
import type { PropertyDispatch$C4 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C4.d.ts'
import type { PropertyDispatch$C5 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C5.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class PropertyDispatch$C1<V extends Object | number | string | boolean, T1 extends Comparable<T1>> extends PropertyDispatch<V> {
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
    private constructor(property1: Property<T1>)
    // private property1: Property<T1>;
    generate(generator: (param0: T1) => V): PropertyDispatch<V>;
    getDefinedProperties(): Property<any>[];
    select(value1: T1, variants: V): PropertyDispatch$C1<V, T1>;
}