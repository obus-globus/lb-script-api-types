import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { PropertyDispatch$C1 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C1.d.ts'
import type { PropertyDispatch$C2 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C2.d.ts'
import type { PropertyDispatch$C3 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C3.d.ts'
import type { PropertyDispatch$C4 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C4.d.ts'
import type { PropertyDispatch$C5 } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch$C5.d.ts'
import type { PropertyValueList } from '../../../../../../net/minecraft/client/data/models/blockstates/PropertyValueList.d.ts'
import type { Variant } from '../../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { VariantMutator } from '../../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export abstract class PropertyDispatch<V extends unknown> extends Object {
    static initial<T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>, T4 extends Comparable<T4>, T5 extends Comparable<T5>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>, paramproperty3: Property<T3>, paramproperty4: Property<T4>, paramproperty5: Property<T5>): PropertyDispatch$C5<MultiVariant, T1, T2, T3, T4, T5>;
    static initial<T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>, T4 extends Comparable<T4>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>, paramproperty3: Property<T3>, paramproperty4: Property<T4>): PropertyDispatch$C4<MultiVariant, T1, T2, T3, T4>;
    static initial<T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>, paramproperty3: Property<T3>): PropertyDispatch$C3<MultiVariant, T1, T2, T3>;
    static initial<T1 extends Comparable<T1>, T2 extends Comparable<T2>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>): PropertyDispatch$C2<MultiVariant, T1, T2>;
    static initial<T1 extends Comparable<T1>>(paramproperty1: Property<T1>): PropertyDispatch$C1<MultiVariant, T1>;
    static modify<T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>, T4 extends Comparable<T4>, T5 extends Comparable<T5>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>, paramproperty3: Property<T3>, paramproperty4: Property<T4>, paramproperty5: Property<T5>): PropertyDispatch$C5<(param0: Variant) => Variant, T1, T2, T3, T4, T5>;
    static modify<T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>, T4 extends Comparable<T4>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>, paramproperty3: Property<T3>, paramproperty4: Property<T4>): PropertyDispatch$C4<(param0: Variant) => Variant, T1, T2, T3, T4>;
    static modify<T1 extends Comparable<T1>, T2 extends Comparable<T2>, T3 extends Comparable<T3>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>, paramproperty3: Property<T3>): PropertyDispatch$C3<(param0: Variant) => Variant, T1, T2, T3>;
    static modify<T1 extends Comparable<T1>, T2 extends Comparable<T2>>(paramproperty1: Property<T1>, paramproperty2: Property<T2>): PropertyDispatch$C2<(param0: Variant) => Variant, T1, T2>;
    static modify<T1 extends Comparable<T1>>(paramproperty1: Property<T1>): PropertyDispatch$C1<(param0: Variant) => Variant, T1>;
    constructor()
    // private values: JavaMap<PropertyValueList, V>;
    getDefinedProperties(): Property<any>[];
    getEntries(): JavaMap<PropertyValueList, V>;
    putValue(key: PropertyValueList, variant: V): void;
    // private verifyComplete(): void;
}