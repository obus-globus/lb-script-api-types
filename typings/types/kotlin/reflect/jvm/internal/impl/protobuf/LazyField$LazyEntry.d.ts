import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { LazyField } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/LazyField.d.ts'
export class LazyField$LazyEntry<K extends Object | number | string | boolean> extends Object implements Map$Entry<K, Object> {
    static comparingByKey(): (param0: Object) => boolean;
    static comparingByKey(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingByValue(): (param0: Object) => boolean;
    static comparingByValue(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    private constructor(arg0: Map$Entry<K, LazyField>)
    // private entry: Map$Entry<K, LazyField>;
    readonly key: K;
    readonly value: Object;
    setValue(arg0: Object): Object;
}