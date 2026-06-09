import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CollectSpliterators$FlatMapSpliterator$Factory<InElementT extends Object | number | string | boolean, OutSpliteratorT extends Spliterator<Object>> extends Object {
    newFlatMapSpliterator(prefix: OutSpliteratorT, fromSplit: Spliterator<InElementT>, function_: (param0: InElementT) => OutSpliteratorT, splitCharacteristics: number, estSplitSize: number): OutSpliteratorT;
}