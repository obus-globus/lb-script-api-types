import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export interface ObjectIterator<K extends Object | number | string | boolean> extends Object, Iterator<K> {
    forEachRemaining(arg0: (param0: T) => void): void;
    skip(arg0: number): number;
}