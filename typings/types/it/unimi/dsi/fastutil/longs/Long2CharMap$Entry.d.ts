import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Long2CharMap$Entry extends Object, Map$Entry<number, string>{
    readonly key: number;
    readonly value: string;
    getCharValue(): string;
    getLongKey(): number;
    setValue(arg0: string): string;
}