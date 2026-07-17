import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class UnmodifiableArrayBackedMap$UnmodifiableEntryIterator extends Object implements Iterator<Map$Entry<string, string>> {
    private constructor(null_: JavaMap<any, any>)
    // private index: number;
    forEachRemaining(arg0: (param0: Map$Entry<string, string>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<string, string>;
}