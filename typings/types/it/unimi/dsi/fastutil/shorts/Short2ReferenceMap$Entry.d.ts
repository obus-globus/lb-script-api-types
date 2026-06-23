import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Short2ReferenceMap$Entry<V extends unknown> extends Object, Map$Entry<number, V>{
    readonly key: number;
    getShortKey(): number;
}