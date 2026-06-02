import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Reference2ByteMap$Entry<K extends Object | number | string | boolean> extends Object, Map$Entry<K, number>{
    readonly value: number;
    getByteValue(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
}