import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClonedChunkSection } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ClonedChunkSection.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
export class ClonedChunkSectionCache extends Object {
    constructor(arg0: Level)
    // private level: Level;
    // private positionToEntry: JavaMap<any, any>;
    // private time: number;
    acquire(arg0: number, arg1: number, arg2: number): ClonedChunkSection;
    cleanup(): void;
    // private clone(arg0: number, arg1: number, arg2: number): ClonedChunkSection;
    invalidate(arg0: number, arg1: number, arg2: number): void;
}