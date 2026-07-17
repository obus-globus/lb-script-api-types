import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { LinkedImmutableMap$LinkedEntry } from '../../../../../com/oracle/truffle/api/object/LinkedImmutableMap$LinkedEntry.d.ts'
import type { LinkedImmutableMap$LinkedIterator } from '../../../../../com/oracle/truffle/api/object/LinkedImmutableMap$LinkedIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class LinkedImmutableMap$LinkedKeyIterator<K extends unknown, V extends unknown> extends LinkedImmutableMap$LinkedIterator<K, V> implements Iterator<K> {
    constructor(map: JavaMap<K, V>, start: LinkedImmutableMap$LinkedEntry<K, V>, forward: boolean)
    forEachRemaining(arg0: (param0: K) => void): void;
    next(): K;
}