import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Reference2BooleanMap$Entry<K extends unknown> extends Object, Map$Entry<K, boolean>{
    readonly value: boolean;
    getBooleanValue(): boolean;
    setValue(arg0: boolean): boolean;
}