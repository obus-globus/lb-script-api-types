import type { Object } from '../../java/lang/Object.d.ts'
export class AbstractList$Companion extends Object {
    // private maxArraySize: number;
    checkBoundsIndexes(startIndex: number, endIndex: number, size: number): void;
    checkElementIndex(index: number, size: number): void;
    checkPositionIndex(index: number, size: number): void;
    checkRangeIndexes(fromIndex: number, toIndex: number, size: number): void;
    newCapacity(oldCapacity: number, minCapacity: number): number;
    orderedEquals(c: (Object | null)[], other: (Object | null)[]): boolean;
    orderedHashCode(c: (Object | null)[]): number;
}