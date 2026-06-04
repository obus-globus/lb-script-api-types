import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Short2ShortMap$Entry extends Object, Map$Entry<number, number>{
    readonly key: number;
    readonly value: number;
    getShortKey(): number;
    getShortValue(): number;
    setValue(arg0: number): number;
}