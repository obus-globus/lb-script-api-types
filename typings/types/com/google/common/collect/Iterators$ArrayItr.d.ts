import type { AbstractIndexedListIterator } from '../../../../com/google/common/collect/AbstractIndexedListIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Iterators$ArrayItr<T extends Object | number | string | boolean> extends AbstractIndexedListIterator<T> {
    constructor(array: T[], position: number)
    // private array: T[];
    get(index: number): T;
}