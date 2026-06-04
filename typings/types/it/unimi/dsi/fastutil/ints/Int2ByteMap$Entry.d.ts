import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Int2ByteMap$Entry extends Object, Map$Entry<number, number>{
    readonly key: number;
    readonly value: number;
    getByteValue(): number;
    getIntKey(): number;
    setValue(arg0: number): number;
}