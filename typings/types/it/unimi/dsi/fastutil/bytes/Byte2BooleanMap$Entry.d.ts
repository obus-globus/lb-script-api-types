import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Byte2BooleanMap$Entry extends Object, Map$Entry<number, boolean>{
    readonly key: number;
    readonly value: boolean;
    getBooleanValue(): boolean;
    getByteKey(): number;
    setValue(arg0: boolean): boolean;
}