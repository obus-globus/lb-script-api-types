import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Byte2LongMap$Entry extends Object, Map$Entry<number, number>{
    readonly key: number;
    readonly value: number;
    getByteKey(): number;
    getLongValue(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
}