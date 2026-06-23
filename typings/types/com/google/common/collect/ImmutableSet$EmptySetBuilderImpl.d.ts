import type { ImmutableSet$SetBuilderImpl } from '../../../../com/google/common/collect/ImmutableSet$SetBuilderImpl.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableSet$EmptySetBuilderImpl<E extends unknown> extends ImmutableSet$SetBuilderImpl<E> {
    private constructor()
    add(e: E): ImmutableSet$SetBuilderImpl<E>;
    build(): E[];
    copy(): ImmutableSet$SetBuilderImpl<E>;
}