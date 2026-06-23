import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export interface ObjectIterator<K extends unknown> extends Object, Iterator<K> {
    forEachRemaining(arg0: (param0: K) => void): void;
    skip(arg0: number): number;
}