import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Int2IntOpenHashMap$MapSpliterator<ConsumerType extends unknown, SplitType extends Int2IntOpenHashMap$MapSpliterator<ConsumerType, SplitType>> extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
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