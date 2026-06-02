import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface Float2CharMap$Entry extends Object, Map$Entry<number, string>{
    readonly key: number;
    readonly value: string;
    getCharValue(): string;
    getFloatKey(): number;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
}