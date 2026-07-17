import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { LazyField } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/LazyField.d.ts'
export class LazyField$LazyEntry<K extends unknown> extends Object implements Map$Entry<K, Object> {
    private constructor(arg0: Map$Entry<K, LazyField>)
    // private entry: Map$Entry<K, LazyField>;
    readonly key: K;
    readonly value: Object;
    setValue(arg0: Object): Object;
}