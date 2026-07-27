import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BedRule } from '../../../../../net/minecraft/world/attribute/BedRule.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityGetter } from '../../../../../net/minecraft/world/level/EntityGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelChunkSection } from '../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { EntityTypeTest } from '../../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { LevelEntityGetter } from '../../../../../net/minecraft/world/level/entity/LevelEntityGetter.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WorldExtensionsKt extends Object {
    static any<B extends Entity, T extends B>(self: LevelEntityGetter<B>, type: EntityTypeTest<B, T>, predicate: (param0: T) => boolean): boolean;
    static filter<T extends B, B extends Entity>(self: LevelEntityGetter<B>, type: EntityTypeTest<B, T>, predicate: (param0: T) => boolean): T[];
    static filterTo<C extends T[], B extends Entity, T extends B>(self: LevelEntityGetter<B>, destination: C, type: EntityTypeTest<B, T>, predicate: (param0: T) => boolean): C;
    static firstOrNull<T extends B, B extends Entity>(self: LevelEntityGetter<B>, type: EntityTypeTest<B, T>, predicate: (param0: T) => boolean): T | null;
    static forEach<B extends Entity, T extends B>(self: LevelEntityGetter<B>, type: EntityTypeTest<B, T>, consumer: (param0: T) => void): void;
    /**
     * Iterates all 4096 block states in a section and provides local section coordinates (0..15).
     *
     * @see LevelChunk.getBlockState
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:88}
     */
    static forEachBlock(self: LevelChunkSection, action: (param0: number, param1: number, param2: number, param3: BlockState) => void): void;
    /**
     * Iterates all blocks in a specific section index and exposes world-space block positions.
     *
     * The {@link mutable} instance is reused across callbacks for allocation-free chunk scanning.
     *
     * @see LevelChunk.getBlockState
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:69}
     */
    static forEachSectionBlock(self: LevelChunk, sectionIndex: number, mutable: BlockPos$MutableBlockPos, action: (param0: BlockPos, param1: BlockState) => void): void;
    static getBedRule(paramarg0: Level): BedRule;
    static getEntitiesInCube<T extends Entity>(self: EntityGetter, midPos: Vec3, range: number, predicate: (param0: T) => boolean): T[];
    static getEntitiesInCube(self: EntityGetter, midPos: Vec3, range: number, exclusion: Entity | null, predicate: (param0: Entity) => boolean): Entity[];
    static getEntityGetter(paramarg0: Level): LevelEntityGetter<Entity>;
    /**
     * Returns the loaded section slice from section 0 through {@link ChunkAccess.highestFilledSectionIndex}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:59}
     */
    static getFilledSections(paramarg0: ChunkAccess): LevelChunkSection[];
    static getRespawnAnchorWorks(paramarg0: Level): boolean;
    /**
     * @returns if water and ice evaporates in this world (e.g. nether)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:47}
     */
    static getWaterEvaporates(paramarg0: Level): boolean;
    static none<B extends Entity, T extends B>(self: LevelEntityGetter<B>, type: EntityTypeTest<B, T>, predicate: (param0: T) => boolean): boolean;
    /**
     * Converts a section index to the section base world Y (multiple of 16).
     *
     * `index == (y >> 4) - (bottomY >> 4)`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/utils/world/WorldExtensions.kt:104}
     */
    static sectionBottomY(self: ChunkAccess, index: number): number;
}