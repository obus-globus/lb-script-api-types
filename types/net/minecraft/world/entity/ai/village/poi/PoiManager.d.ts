import type { DataFixer } from '../../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Pair } from '../../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { BiPredicate } from '../../../../../../../java/util/function/BiPredicate.d.ts'
import type { BooleanSupplier } from '../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PointOfInterestStorageExtended } from '../../../../../../../net/caffeinemc/mods/lithium/common/world/interests/PointOfInterestStorageExtended.d.ts'
import type { RegionBasedStorageSectionExtended } from '../../../../../../../net/caffeinemc/mods/lithium/common/world/interests/RegionBasedStorageSectionExtended.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DebugPoiInfo } from '../../../../../../../net/minecraft/util/debug/DebugPoiInfo.d.ts'
import type { PoiManager$DistanceTracker } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager$DistanceTracker.d.ts'
import type { PoiManager$Occupancy } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiManager$Occupancy.d.ts'
import type { PoiRecord } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiSection } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiSection.d.ts'
import type { PoiSection$Packed } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiSection$Packed.d.ts'
import type { PoiType } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { WorldBorder } from '../../../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { ChunkIOErrorReporter } from '../../../../../../../net/minecraft/world/level/chunk/storage/ChunkIOErrorReporter.d.ts'
import type { RegionStorageInfo } from '../../../../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { SectionStorage } from '../../../../../../../net/minecraft/world/level/chunk/storage/SectionStorage.d.ts'
export class PoiManager extends SectionStorage<PoiSection, PoiSection$Packed> implements PointOfInterestStorageExtended, RegionBasedStorageSectionExtended<Object> {
    static MAX_VILLAGE_DISTANCE: number;
    static VILLAGE_SECTION_SIZE: number;
    constructor(info: RegionStorageInfo, folder: Path[], fixerUpper: DataFixer, sync: boolean, registryAccess: RegistryAccess, errorReporter: ChunkIOErrorReporter, levelHeightAccessor: LevelHeightAccessor)
    // private distanceTracker: PoiManager$DistanceTracker;
    // private loadedChunks: (Object | null)[];
    // private preloadRadius: number;
    // private preloadedCenterChunks: (Object | null)[];
    add(pos: BlockPos, type: Holder<PoiType>): PoiRecord;
    checkConsistencyWithBlocks(sectionPos: SectionPos, blockSection: LevelChunkSection): void;
    ensureLoadedAndValid(arg0: LevelReader, arg1: BlockPos, arg2: number): void;
    exists(pos: BlockPos, predicate: (param0: Holder<PoiType>) => kotlin.Boolean): boolean;
    existsAtPosition(poiType: ResourceKey<PoiType>, blockPos: BlockPos): boolean;
    find(arg0: (param0: Object) => kotlin.Boolean, arg1: (param0: Object) => kotlin.Boolean, arg2: BlockPos, arg3: number, arg4: PoiManager$Occupancy): Optional<Object>;
    findAll(predicate: (param0: Holder<PoiType>) => kotlin.Boolean, filter: (param0: BlockPos) => kotlin.Boolean, center: BlockPos, radius: number, occupancy: PoiManager$Occupancy): Stream<BlockPos>;
    findAllClosestFirstWithType(predicate: (param0: Holder<PoiType>) => kotlin.Boolean, filter: (param0: BlockPos) => kotlin.Boolean, center: BlockPos, radius: number, occupancy: PoiManager$Occupancy): Stream<Pair<Holder<PoiType>, BlockPos>>;
    findAllWithType(predicate: (param0: Holder<PoiType>) => kotlin.Boolean, filter: (param0: BlockPos) => kotlin.Boolean, center: BlockPos, radius: number, occupancy: PoiManager$Occupancy): Stream<Pair<Holder<PoiType>, BlockPos>>;
    findClosest(arg0: (param0: Object) => kotlin.Boolean, arg1: (param0: Object) => kotlin.Boolean, arg2: BlockPos, arg3: number, arg4: PoiManager$Occupancy): Optional<Object>;
    findClosest(arg0: (param0: Object) => kotlin.Boolean, arg1: BlockPos, arg2: number, arg3: PoiManager$Occupancy): Optional<Object>;
    findClosestWithType(arg0: (param0: Object) => kotlin.Boolean, arg1: BlockPos, arg2: number, arg3: PoiManager$Occupancy): Optional<Object>;
    getCountInRange(arg0: (param0: Object) => kotlin.Boolean, arg1: BlockPos, arg2: number, arg3: PoiManager$Occupancy): number;
    getDebugPoiInfo(pos: BlockPos): DebugPoiInfo;
    getInChunk(predicate: (param0: Holder<PoiType>) => kotlin.Boolean, chunkPos: ChunkPos, occupancy: PoiManager$Occupancy): Stream<PoiRecord>;
    getInRange(arg0: (param0: Object) => kotlin.Boolean, arg1: BlockPos, arg2: number, arg3: PoiManager$Occupancy): Stream<Object>;
    getInSquare(predicate: (param0: Holder<PoiType>) => kotlin.Boolean, center: BlockPos, radius: number, occupancy: PoiManager$Occupancy): Stream<PoiRecord>;
    getRandom(arg0: (param0: Object) => kotlin.Boolean, arg1: (param0: Object) => kotlin.Boolean, arg2: PoiManager$Occupancy, arg3: BlockPos, arg4: number, arg5: RandomSource): Optional<Object>;
    getType(pos: BlockPos): Optional<Holder<PoiType>>;
    // private isVillageCenter(sectionPos: number): boolean;
    lithium$findNearestForPortalLogic(arg0: BlockPos, arg1: number, arg2: Holder<Object>, arg3: PoiManager$Occupancy, arg4: (param0: Object) => kotlin.Boolean, arg5: WorldBorder): Optional<Object>;
    // private lithium$getLowestEmptyOrInvalidSection(arg0: LevelReader, arg1: number, arg2: number): number;
    lithium$getNClosestFirstWithType(arg0: (param0: Object) => kotlin.Boolean, arg1: (param0: Object) => kotlin.Boolean, arg2: BlockPos, arg3: number, arg4: PoiManager$Occupancy, arg5: number): E[];
    lithium$takeAt(arg0: (param0: Object) => kotlin.Boolean, arg1: (param0: Object, param1: Object) => kotlin.Boolean, arg2: BlockPos): Optional<Object>;
    onSectionLoad(sectionPos: number): void;
    release(pos: BlockPos): boolean;
    remove(pos: BlockPos): void;
    sectionsToVillage(sectionPos: SectionPos): number;
    setDirty(sectionPos: number): void;
    take(predicate: (param0: Holder<PoiType>) => kotlin.Boolean, filter: (param0: Holder<PoiType>, param1: BlockPos) => kotlin.Boolean, center: BlockPos, radius: number): Optional<BlockPos>;
    tick(haveTime: () => kotlin.Boolean): void;
    // private updateFromSection(blockSection: LevelChunkSection, pos: SectionPos, output: (param0: BlockPos, param1: Holder<PoiType>) => void): void;
    // private withinSquareInL2Range(arg0: (param0: Object) => kotlin.Boolean, arg1: BlockPos, arg2: number, arg3: PoiManager$Occupancy): Object[];
}