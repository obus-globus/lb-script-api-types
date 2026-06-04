import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Char2BooleanMap$Entry extends Object, Map$Entry<string, boolean>{
    readonly key: string;
    readonly value: boolean;
    getBooleanValue(): boolean;
    getCharKey(): string;
    setValue(arg0: boolean): boolean;
}