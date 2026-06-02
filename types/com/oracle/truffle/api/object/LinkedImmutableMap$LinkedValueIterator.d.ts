import type { LinkedImmutableMap$LinkedEntry } from '../../../../../com/oracle/truffle/api/object/LinkedImmutableMap$LinkedEntry.d.ts'
import type { LinkedImmutableMap$LinkedIterator } from '../../../../../com/oracle/truffle/api/object/LinkedImmutableMap$LinkedIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class LinkedImmutableMap$LinkedValueIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends LinkedImmutableMap$LinkedIterator<K, V> implements Iterator<V> {
    constructor(map: Map<K, V>, start: LinkedImmutableMap$LinkedEntry<K, V>, forward: boolean)
    forEachRemaining(arg0: (param0: T) => void): void;
    next(): V;
}