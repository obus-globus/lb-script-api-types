import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ImmutableSet$SetBuilderImpl<E extends Object | number | string | boolean> extends Object {
    constructor(toCopy: ImmutableSet$SetBuilderImpl<E>)
    constructor(expectedCapacity: number)
    // private dedupedElements: E[];
    // private distinct: number;
    add(e: E): ImmutableSet$SetBuilderImpl<E>;
    addDedupedElement(e: E): void;
    build(): E[];
    combine(other: ImmutableSet$SetBuilderImpl<E>): ImmutableSet$SetBuilderImpl<E>;
    copy(): ImmutableSet$SetBuilderImpl<E>;
    // private ensureCapacity(minCapacity: number): void;
    review(): ImmutableSet$SetBuilderImpl<E>;
}