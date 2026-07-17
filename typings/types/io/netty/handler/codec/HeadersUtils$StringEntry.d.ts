import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class HeadersUtils$StringEntry extends Object implements Map$Entry<string, string> {
    constructor(arg0: Map$Entry<CharSequence, CharSequence>)
    // private entry: Map$Entry<CharSequence, CharSequence>;
    readonly key: string;
    // private name: string;
    readonly value: string;
    readonly value: string;
    setValue(arg0: string): string;
    toString(): string;
}