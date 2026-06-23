import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableCollection$Builder } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableCollection$Builder.d.ts'
export abstract class ImmutableCollection$ArrayBasedBuilder<E extends unknown> extends ImmutableCollection$Builder<E> {
    constructor(arg0: number)
    // private contents: Object[];
    // private size: number;
    add(arg0: E): ImmutableCollection$ArrayBasedBuilder<E>;
    add(arg0: E[]): ImmutableCollection$Builder<E>;
    addAll(arg0: E[]): ImmutableCollection$Builder<E>;
    // private ensureCapacity(arg0: number): void;
}