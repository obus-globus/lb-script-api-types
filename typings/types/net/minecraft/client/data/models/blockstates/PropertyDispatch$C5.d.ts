import type { Function5 } from '../../../../../../com/mojang/datafixers/util/Function5.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { PropertyDispatch } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch.d.ts'
import type { PropertyDispatch$C1 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C1.d.ts'
import type { PropertyDispatch$C2 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C2.d.ts'
import type { PropertyDispatch$C3 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C3.d.ts'
import type { PropertyDispatch$C4 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C4.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class PropertyDispatch$C5<V extends Object | number | string | boolean, T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>, T4 extends Comparable<T4>, T5 extends Comparable<T5>> extends PropertyDispatch<V> {
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
    private constructor(property1: Property<T1>, property2: Property<T2>, property3: Property<T3>, property4: Property<T4>, property5: Property<T5>)
    // private property1: Property<T1>;
    // private property2: Property<T2>;
    // private property3: Property<T3>;
    // private property4: Property<T4>;
    // private property5: Property<T5>;
    generate(generator: Function5<T1, T2, T3, T4, T5, V>): PropertyDispatch<V>;
    getDefinedProperties(): Property<Object>[];
    select(value1: T1, value2: T2, value3: T3, value4: T4, value5: T5, variants: V): PropertyDispatch$C5<V, T1, T2, T3, T4, T5>;
}