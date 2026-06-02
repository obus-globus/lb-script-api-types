import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
export interface CollectToTag$ContainerBuilder extends Object{
    acceptKey(id: string): void;
    acceptValue(tag: Tag): void;
    build(): Tag;
}