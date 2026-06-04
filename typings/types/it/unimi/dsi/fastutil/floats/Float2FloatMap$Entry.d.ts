import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Float2FloatMap$Entry extends Object, Map$Entry<number, number>{
    readonly key: number;
    readonly value: number;
    getFloatKey(): number;
    getFloatValue(): number;
    setValue(arg0: number): number;
}