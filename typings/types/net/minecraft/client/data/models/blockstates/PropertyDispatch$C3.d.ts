import type { Function3 } from '../../../../../../com/mojang/datafixers/util/Function3.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { PropertyDispatch } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch.d.ts'
import type { PropertyDispatch$C1 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C1.d.ts'
import type { PropertyDispatch$C2 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C2.d.ts'
import type { PropertyDispatch$C4 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C4.d.ts'
import type { PropertyDispatch$C5 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C5.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class PropertyDispatch$C3<V extends Object | number | string | boolean, T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>> extends PropertyDispatch<V> {
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
    private constructor(property1: Property<T1>, property2: Property<T2>, property3: Property<T3>)
    // private property1: Property<T1>;
    // private property2: Property<T2>;
    // private property3: Property<T3>;
    generate(generator: Function3<T1, T2, T3, V>): PropertyDispatch<V>;
    getDefinedProperties(): Property<any>[];
    select(value1: T1, value2: T2, value3: T3, variants: V): PropertyDispatch$C3<V, T1, T2, T3>;
}