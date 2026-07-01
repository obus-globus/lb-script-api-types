import type { SequentialBlock } from '../../../ai/djl/nn/SequentialBlock.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class SequentialBlock$StreamIterator extends Object implements Iterator<(Object | null)[]> {
    constructor(null_: SequentialBlock, arg1: ParameterStore, arg2: (Object | null)[], arg3: boolean, arg4: any)
    // private childIndex: number;
    // private current: (Object | null)[];
    // private parameterStore: ParameterStore;
    // private training: boolean;
    forEachRemaining(arg0: (param0: (Object | null)[]) => void): void;
    hasNext(): boolean;
    next(): (Object | null)[];
}