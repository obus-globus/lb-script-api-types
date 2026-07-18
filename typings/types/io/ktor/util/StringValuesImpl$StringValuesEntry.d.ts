import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class StringValuesImpl$StringValuesEntry extends Object implements Map$Entry<string, string[]> {
    constructor(key: string, value: string[])
    readonly key: string;
    readonly value: string[];
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}