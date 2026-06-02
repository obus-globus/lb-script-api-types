import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Double2ReferenceMap$Entry<V extends Object | number | string | boolean> extends Object, Map$Entry<number, V>{
    readonly key: number;
    getDoubleKey(): number;
}