import type { ImmutableBiMap$Builder } from '../../../../com/google/common/collect/ImmutableBiMap$Builder.d.ts'
import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class RegularImmutableBiMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<K extends unknown, V extends unknown>(): ImmutableBiMap$Builder<K, V>;
    static builder<K extends unknown, V extends unknown>(): ImmutableMap$Builder<K, V>;
    static builderWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): ImmutableBiMap$Builder<K, V>;
    static builderWithExpectedSize<K extends unknown, V extends unknown>(paramexpectedSize: number): ImmutableMap$Builder<K, V>;
    static copyOf<K extends unknown, V extends unknown>(paramentries: Map$Entry<K, V>[]): Map<K, V>;
    static copyOf<K extends unknown, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    static of<K extends unknown, V extends unknown>(): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V, paramk6: K, paramv6: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V, paramk6: K, paramv6: V, paramk7: K, paramv7: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V, paramk6: K, paramv6: V, paramk7: K, paramv7: V, paramk8: K, paramv8: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V, paramk6: K, paramv6: V, paramk7: K, paramv7: V, paramk8: K, paramv8: V, paramk9: K, paramv9: V): Map<K, V>;
    static of<K extends unknown, V extends unknown>(paramk1: K, paramv1: V, paramk2: K, paramv2: V, paramk3: K, paramv3: V, paramk4: K, paramv4: V, paramk5: K, paramv5: V, paramk6: K, paramv6: V, paramk7: K, paramv7: V, paramk8: K, paramv8: V, paramk9: K, paramv9: V, paramk10: K, paramv10: V): Map<K, V>;
    static ofEntries<K extends unknown, V extends unknown>(...paramentries: Map$Entry<K, V>[]): Map<K, V>;
    static toImmutableBiMap<T extends unknown, K extends unknown, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V): Collector<T, Object, Map<K, V>>;
    static toImmutableMap<T extends unknown, K extends unknown, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V): Collector<T, Object, Map<K, V>>;
    static toImmutableMap<T extends unknown, K extends unknown, V extends unknown>(paramkeyFunction: (param0: Object) => K, paramvalueFunction: (param0: Object) => V, parammergeFunction: (param0: V, param1: V) => V): Collector<T, Object, Map<K, V>>;
}