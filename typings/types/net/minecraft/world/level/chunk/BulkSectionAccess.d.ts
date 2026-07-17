import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunkSection } from '../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
export class BulkSectionAccess extends Object implements AutoCloseable {
    constructor(level: LevelAccessor)
    // private acquiredSections: JavaMap<any, any>;
    // private lastSection: LevelChunkSection;
    // private lastSectionKey: number;
    // private level: LevelAccessor;
    close(): void;
    getBlockState(pos: BlockPos): BlockState;
    getSection(pos: BlockPos): LevelChunkSection;
}