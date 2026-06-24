import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class DirectMappedPos2AABBsCache extends Record {
    static BLOCK_CACHE_TL: ThreadLocal<DirectMappedPos2AABBsCache>;
    constructor(arg0: number)
    constructor(directMappedTags: number[], directMappedStates: AABB[][])
    // private directMappedStates: AABB[][];
    // private directMappedTags: number[];
    cacheEntry(arg0: AABB[], arg1: number): void;
    directMappedStates(): AABB[][];
    directMappedTags(): number[];
    equals(arg0: Object | null): boolean;
    getEntry(arg0: number): AABB[];
    hashCode(): number;
    invalidate(): void;
    toString(): string;
}