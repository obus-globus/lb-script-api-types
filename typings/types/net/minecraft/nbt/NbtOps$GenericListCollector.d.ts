import type { Object } from '../../../java/lang/Object.d.ts'
import type { NbtOps$ListCollector } from '../../../net/minecraft/nbt/NbtOps$ListCollector.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export class NbtOps$GenericListCollector extends Object implements NbtOps$ListCollector {
    private constructor()
    constructor(initials: (Object | null)[])
    constructor(initials: (Object | null)[])
    constructor(initials: (Object | null)[])
    private constructor(initial: (Object | null)[])
    // private result: (Object | null)[];
    accept(tag: Tag): NbtOps$ListCollector;
    acceptAll(tags: Tag[]): NbtOps$ListCollector;
    result(): Tag;
}