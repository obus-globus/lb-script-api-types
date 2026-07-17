import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class UnmodifiableArrayBackedMap$UnmodifiableEntry extends Object implements Map$Entry<string, string> {
    constructor(null_: { [key: string]: any }, index: number)
    // private index: number;
    readonly key: string;
    readonly value: string;
    hashCode(): number;
    setValue(value: string): string;
}