import type { Object } from '../../../java/lang/Object.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export interface NbtOps$ListCollector extends Object{
    accept(t: Tag): NbtOps$ListCollector;
    acceptAll(tags: Tag[]): NbtOps$ListCollector;
    result(): Tag;
}