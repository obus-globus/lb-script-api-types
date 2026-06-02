import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class RopeByteString$PieceIterator extends Object implements Iterator<(Object | null)[]> {
    private constructor(arg0: number[])
    // private breadCrumbs: (Object | null)[][];
    // private next: (Object | null)[];
    forEachRemaining(arg0: (param0: T) => void): void;
    // private getLeafByLeft(arg0: number[]): (Object | null)[];
    // private getNextNonEmptyLeaf(): (Object | null)[];
    hasNext(): boolean;
    next(): (Object | null)[];
    remove(): void;
}