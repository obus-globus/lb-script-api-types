import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { CollectToTag$ContainerBuilder } from '../../../../net/minecraft/nbt/visitors/CollectToTag$ContainerBuilder.d.ts'
export class CollectToTag$CompoundBuilder extends Object implements CollectToTag$ContainerBuilder {
    private constructor()
    // private compound: CompoundTag;
    // private lastId: string;
    acceptKey(id: string): void;
    acceptValue(tag: Tag): void;
    build(): Tag;
}