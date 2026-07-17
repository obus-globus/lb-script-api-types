import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ReadOnlyHttpHeaders$ReadOnlyStringIterator extends Object implements Iterator<Map$Entry<string, string>>, Map$Entry<string, string> {
    private constructor(null_: (Object | null)[])
    readonly key: string;
    readonly key: string;
    // private nextNameIndex: number;
    readonly value: string;
    readonly value: string;
    forEachRemaining(arg0: (param0: Map$Entry<string, string>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<string, string>;
    remove(): void;
    setValue(arg0: string): string;
    toString(): string;
}