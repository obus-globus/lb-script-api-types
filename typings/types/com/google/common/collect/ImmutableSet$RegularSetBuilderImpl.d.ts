import type { ImmutableSet$SetBuilderImpl } from '../../../../com/google/common/collect/ImmutableSet$SetBuilderImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSet$RegularSetBuilderImpl<E extends unknown> extends ImmutableSet$SetBuilderImpl<E> {
    constructor(toCopy: ImmutableSet$RegularSetBuilderImpl<E>)
    constructor(expectedCapacity: number)
    // private expandTableThreshold: number;
    // private hashCode: number;
    // private hashTable: Object[];
    // private maxRunBeforeFallback: number;
    add(e: E): ImmutableSet$SetBuilderImpl<E>;
    build(): E[];
    copy(): ImmutableSet$SetBuilderImpl<E>;
    ensureTableCapacity(minCapacity: number): void;
    // private insertInHashTable(e: E): ImmutableSet$SetBuilderImpl<E>;
    review(): ImmutableSet$SetBuilderImpl<E>;
}