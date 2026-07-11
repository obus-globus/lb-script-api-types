import type { ImmutableCollection$Builder } from '../../../../com/google/common/collect/ImmutableCollection$Builder.d.ts'
import type { ImmutableSet$SetBuilderImpl } from '../../../../com/google/common/collect/ImmutableSet$SetBuilderImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ImmutableSet$Builder<E extends unknown> extends ImmutableCollection$Builder<E> {
    constructor()
    constructor(subclass: boolean)
    constructor(capacity: number)
    // private forceCopy: boolean;
    // private impl: ImmutableSet$SetBuilderImpl<E>;
    add(element: E): ImmutableSet$Builder<E>;
    add(...elements: E[]): ImmutableSet$Builder<E>;
    addAll(elements: E[]): ImmutableSet$Builder<E>;
    addAll(elements: Iterator<E>): ImmutableSet$Builder<E>;
    build(): E[];
    combine(other: ImmutableSet$Builder<E>): ImmutableSet$Builder<E>;
    copy(): void;
    copyIfNecessary(): void;
    forceJdk(): void;
}