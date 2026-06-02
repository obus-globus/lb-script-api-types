import type { Object } from '../../java/lang/Object.d.ts'
import type { ListIterator } from '../../java/util/ListIterator.d.ts'
export class EmptyIterator extends Object implements ListIterator<void> {
    static INSTANCE: EmptyIterator;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): void;
    nextIndex(): number;
    previous(): void;
    previousIndex(): number;
}