import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Char2ByteMap$Entry extends Object, Map$Entry<string, number>{
    readonly key: string;
    readonly value: number;
    getByteValue(): number;
    getCharKey(): string;
    setValue(arg0: number): number;
}