import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Char2CharMap$Entry extends Object, Map$Entry<string, string>{
    readonly key: string;
    readonly value: string;
    getCharKey(): string;
    getCharValue(): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
}