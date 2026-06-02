import type { Object } from '../../../java/lang/Object.d.ts'
import type { NbtOps$ListCollector } from '../../../net/minecraft/nbt/NbtOps$ListCollector.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export class NbtOps$LongListCollector extends Object implements NbtOps$ListCollector {
    constructor(initialValues: number[])
    // private values: (Object | null)[];
    accept(tag: Tag): NbtOps$ListCollector;
    acceptAll(tags: Tag[]): NbtOps$ListCollector;
    result(): Tag;
}