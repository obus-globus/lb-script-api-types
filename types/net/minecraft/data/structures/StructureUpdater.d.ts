import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SnbtToNbt$Filter } from '../../../../net/minecraft/data/structures/SnbtToNbt$Filter.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
export class StructureUpdater extends Object implements SnbtToNbt$Filter {
    static update(paramname: string, paramtag: CompoundTag): CompoundTag;
    constructor()
    apply(name: string, input: CompoundTag): CompoundTag;
}