import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Long2FloatMap$Entry extends Object, Map$Entry<number, number>{
    readonly key: number;
    readonly value: number;
    getFloatValue(): number;
    getLongKey(): number;
    setValue(arg0: number): number;
}