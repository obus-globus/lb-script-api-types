import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BedRule } from '../../../../../net/minecraft/world/attribute/BedRule.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityGetter } from '../../../../../net/minecraft/world/level/EntityGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelChunkSection } from '../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WorldExtensionsKt extends Object {
    /**
     * Iterates all 4096 block states in a section and provides local section coordinates (0..15).
     *
     * @see LevelChunk.getBlockState
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:77}
     */
    static forEachBlock(levelChunkSection: LevelChunkSection, action: (param0: Object, param1: Object, param2: Object, param3: Object) => void): void;
    /**
     * Iterates all blocks in a specific section index and exposes world-space block positions.
     *
     * The {@link mutable} instance is reused across callbacks for allocation-free chunk scanning.
     *
     * @see LevelChunk.getBlockState
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:56}
     */
    static forEachSectionBlock(levelChunk: LevelChunk, sectionIndex: number, mutable: BlockPos$MutableBlockPos, action: (param0: Object, param1: Object) => void): void;
    static getBedRule(paramarg0: Level): BedRule;
    static getEntitiesInCube(paramarg0: EntityGetter, paramarg1: Vec3, paramarg2: number, paramarg3: (param0: Entity | null) => boolean): (Entity | null)[];
    static getEntitiesInCube(paramarg0: EntityGetter, paramarg1: Vec3, paramarg2: number, paramarg3: Entity, paramarg4: (param0: Entity) => boolean): Entity[];
    /**
     * Returns the loaded section slice from section 0 through {@link ChunkAccess.highestFilledSectionIndex}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:50}
     */
    static getFilledSections(paramarg0: ChunkAccess): LevelChunkSection[];
    static getRespawnAnchorWorks(paramarg0: Level): boolean;
    /**
     * @returns if water and ice evaporates in this world (e.g. nether)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:38}
     */
    static getWaterEvaporates(paramarg0: Level): boolean;
    /**
     * Converts a section index to the section base world Y (multiple of 16).
     *
     * `index == (y >> 4) - (bottomY >> 4)`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:93}
     */
    static sectionBottomY(chunkAccess: ChunkAccess, index: number): number;
}