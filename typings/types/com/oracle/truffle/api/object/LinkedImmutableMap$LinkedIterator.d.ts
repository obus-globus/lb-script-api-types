import type { LinkedImmutableMap$LinkedEntry } from '../../../../../com/oracle/truffle/api/object/LinkedImmutableMap$LinkedEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LinkedImmutableMap$LinkedIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor(map: Map<K, V>, start: LinkedImmutableMap$LinkedEntry<K, V>, forward: boolean)
    // private forward: boolean;
    // private map: Map<K, V>;
    // private next: LinkedImmutableMap$LinkedEntry<K, V>;
    hasNext(): boolean;
    nextEntry(): LinkedImmutableMap$LinkedEntry<K, V>;
}