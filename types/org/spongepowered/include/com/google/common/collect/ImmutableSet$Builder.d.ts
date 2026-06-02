import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableCollection$ArrayBasedBuilder } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableCollection$ArrayBasedBuilder.d.ts'
export class ImmutableSet$Builder<E extends Object | number | string | boolean> extends ImmutableCollection$ArrayBasedBuilder<E> {
    constructor()
    constructor(arg0: number)
    add(arg0: E): ImmutableSet$Builder<E>;
    add(arg0: E[]): ImmutableSet$Builder<E>;
    addAll(arg0: E[]): ImmutableSet$Builder<E>;
    build(): E[];
}