import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Char2IntMap$Entry extends Object, Map$Entry<string, number>{
    readonly key: string;
    readonly value: number;
    getCharKey(): string;
    getIntValue(): number;
    setValue(arg0: number): number;
}