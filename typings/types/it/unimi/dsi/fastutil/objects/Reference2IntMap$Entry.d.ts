import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Reference2IntMap$Entry<K extends unknown> extends Object, Map$Entry<K, number>{
    readonly value: number;
    getIntValue(): number;
    setValue(arg0: number): number;
}