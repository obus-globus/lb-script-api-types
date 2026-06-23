import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Object2CharOpenCustomHashMap$MapSpliterator<ConsumerType extends unknown, SplitType extends Object2CharOpenCustomHashMap$MapSpliterator<Object, any>> extends Object {
    constructor(null_: Object2CharOpenCustomHashMap$MapSpliterator<Object, any>)
    constructor(null_: Object2CharOpenCustomHashMap$MapSpliterator<Object, any>, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    // private c: number;
    // private hasSplit: boolean;
    // private max: number;
    // private mustReturnNull: boolean;
    // private pos: number;
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    estimateSize(): number;
    forEachRemaining(arg0: ConsumerType): void;
    makeForSplit(arg0: number, arg1: number, arg2: boolean): SplitType;
    skip(arg0: number): number;
    tryAdvance(arg0: ConsumerType): boolean;
    trySplit(): SplitType;
}