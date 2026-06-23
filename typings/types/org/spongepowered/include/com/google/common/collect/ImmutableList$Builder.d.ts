import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableCollection$ArrayBasedBuilder } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableCollection$ArrayBasedBuilder.d.ts'
export class ImmutableList$Builder<E extends unknown> extends ImmutableCollection$ArrayBasedBuilder<E> {
    constructor()
    constructor(arg0: number)
    add(arg0: E): ImmutableList$Builder<E>;
    add(arg0: E[]): ImmutableList$Builder<E>;
    addAll(arg0: E[]): ImmutableList$Builder<E>;
    build(): E[];
}