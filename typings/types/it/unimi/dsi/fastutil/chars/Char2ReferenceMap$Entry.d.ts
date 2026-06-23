import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Char2ReferenceMap$Entry<V extends unknown> extends Object, Map$Entry<string, V>{
    readonly key: string;
    getCharKey(): string;
}