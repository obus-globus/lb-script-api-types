import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
export interface SnbtToNbt$Filter extends Object{
    apply(name: string, input: CompoundTag): CompoundTag;
}