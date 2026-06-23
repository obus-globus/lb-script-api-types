import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ObjectSpliterator<K extends unknown> extends Spliterator<K>, Object {
    forEachRemaining(arg0: (param0: K) => void): void;
    getComparator(): (param0: Object) => boolean;
    getExactSizeIfKnown(): number;
    hasCharacteristics(arg0: number): boolean;
    skip(arg0: number): number;
    trySplit(): ObjectSpliterator<K>;
}