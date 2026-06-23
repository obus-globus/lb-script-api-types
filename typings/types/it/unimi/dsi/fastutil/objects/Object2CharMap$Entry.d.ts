import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Object2CharMap$Entry<K extends unknown> extends Object, Map$Entry<K, string>{
    readonly value: string;
    getCharValue(): string;
    setValue(arg0: string): string;
}