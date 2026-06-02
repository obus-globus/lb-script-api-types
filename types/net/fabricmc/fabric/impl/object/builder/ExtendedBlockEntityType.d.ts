import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BannerBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BannerBlockEntity.d.ts'
import type { BeaconBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BeaconBlockEntity.d.ts'
import type { BedBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BedBlockEntity.d.ts'
import type { BeehiveBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BeehiveBlockEntity.d.ts'
import type { BellBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BellBlockEntity.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockEntityType$BlockEntitySupplier } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType$BlockEntitySupplier.d.ts'
import type { BrushableBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BrushableBlockEntity.d.ts'
import type { CalibratedSculkSensorBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/CalibratedSculkSensorBlockEntity.d.ts'
import type { CampfireBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/CampfireBlockEntity.d.ts'
import type { CommandBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/CommandBlockEntity.d.ts'
import type { ComparatorBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/ComparatorBlockEntity.d.ts'
import type { ConduitBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/ConduitBlockEntity.d.ts'
import type { CopperGolemStatueBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/CopperGolemStatueBlockEntity.d.ts'
import type { CreakingHeartBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/CreakingHeartBlockEntity.d.ts'
import type { DaylightDetectorBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/DaylightDetectorBlockEntity.d.ts'
import type { EnchantingTableBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/EnchantingTableBlockEntity.d.ts'
import type { EnderChestBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/EnderChestBlockEntity.d.ts'
import type { HangingSignBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/HangingSignBlockEntity.d.ts'
import type { JigsawBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity.d.ts'
import type { LecternBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/LecternBlockEntity.d.ts'
import type { SculkCatalystBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/SculkCatalystBlockEntity.d.ts'
import type { SculkSensorBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/SculkSensorBlockEntity.d.ts'
import type { SculkShriekerBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/SculkShriekerBlockEntity.d.ts'
import type { SignBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SkullBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/SkullBlockEntity.d.ts'
import type { SpawnerBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/SpawnerBlockEntity.d.ts'
import type { StructureBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/StructureBlockEntity.d.ts'
import type { TestBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TestBlockEntity.d.ts'
import type { TestInstanceBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity.d.ts'
import type { TheEndGatewayBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TheEndGatewayBlockEntity.d.ts'
import type { TheEndPortalBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TheEndPortalBlockEntity.d.ts'
import type { TrialSpawnerBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TrialSpawnerBlockEntity.d.ts'
import type { VaultBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/vault/VaultBlockEntity.d.ts'
import type { PistonMovingBlockEntity } from '../../../../../../net/minecraft/world/level/block/piston/PistonMovingBlockEntity.d.ts'
export class ExtendedBlockEntityType<T extends BlockEntity> extends BlockEntityType<T> {
    static BANNER: BlockEntityType<BannerBlockEntity>;
    static BARREL: BlockEntityType<(Object | null)[]>;
    static BEACON: BlockEntityType<BeaconBlockEntity>;
    static BED: BlockEntityType<BedBlockEntity>;
    static BEEHIVE: BlockEntityType<BeehiveBlockEntity>;
    static BELL: BlockEntityType<BellBlockEntity>;
    static BLAST_FURNACE: BlockEntityType<(Object | null)[]>;
    static BREWING_STAND: BlockEntityType<(Object | null)[]>;
    static BRUSHABLE_BLOCK: BlockEntityType<BrushableBlockEntity>;
    static CALIBRATED_SCULK_SENSOR: BlockEntityType<CalibratedSculkSensorBlockEntity>;
    static CAMPFIRE: BlockEntityType<CampfireBlockEntity>;
    static CHEST: BlockEntityType<(Object | null)[]>;
    static CHISELED_BOOKSHELF: BlockEntityType<(Object | null)[]>;
    static COMMAND_BLOCK: BlockEntityType<CommandBlockEntity>;
    static COMPARATOR: BlockEntityType<ComparatorBlockEntity>;
    static CONDUIT: BlockEntityType<ConduitBlockEntity>;
    static COPPER_GOLEM_STATUE: BlockEntityType<CopperGolemStatueBlockEntity>;
    static CRAFTER: BlockEntityType<(Object | null)[]>;
    static CREAKING_HEART: BlockEntityType<CreakingHeartBlockEntity>;
    static DAYLIGHT_DETECTOR: BlockEntityType<DaylightDetectorBlockEntity>;
    static DECORATED_POT: BlockEntityType<(Object | null)[]>;
    static DISPENSER: BlockEntityType<(Object | null)[]>;
    static DROPPER: BlockEntityType<(Object | null)[]>;
    static ENCHANTING_TABLE: BlockEntityType<EnchantingTableBlockEntity>;
    static ENDER_CHEST: BlockEntityType<EnderChestBlockEntity>;
    static END_GATEWAY: BlockEntityType<TheEndGatewayBlockEntity>;
    static END_PORTAL: BlockEntityType<TheEndPortalBlockEntity>;
    static FURNACE: BlockEntityType<(Object | null)[]>;
    static HANGING_SIGN: BlockEntityType<HangingSignBlockEntity>;
    static HOPPER: BlockEntityType<(Object | null)[]>;
    static JIGSAW: BlockEntityType<JigsawBlockEntity>;
    static JUKEBOX: BlockEntityType<(Object | null)[]>;
    static LECTERN: BlockEntityType<LecternBlockEntity>;
    static MOB_SPAWNER: BlockEntityType<SpawnerBlockEntity>;
    static PISTON: BlockEntityType<PistonMovingBlockEntity>;
    static SCULK_CATALYST: BlockEntityType<SculkCatalystBlockEntity>;
    static SCULK_SENSOR: BlockEntityType<SculkSensorBlockEntity>;
    static SCULK_SHRIEKER: BlockEntityType<SculkShriekerBlockEntity>;
    static SHELF: BlockEntityType<(Object | null)[]>;
    static SHULKER_BOX: BlockEntityType<(Object | null)[]>;
    static SIGN: BlockEntityType<SignBlockEntity>;
    static SKULL: BlockEntityType<SkullBlockEntity>;
    static SMOKER: BlockEntityType<(Object | null)[]>;
    static STRUCTURE_BLOCK: BlockEntityType<StructureBlockEntity>;
    static TEST_BLOCK: BlockEntityType<TestBlockEntity>;
    static TEST_INSTANCE_BLOCK: BlockEntityType<TestInstanceBlockEntity>;
    static TRAPPED_CHEST: BlockEntityType<(Object | null)[]>;
    static TRIAL_SPAWNER: BlockEntityType<TrialSpawnerBlockEntity>;
    static VAULT: BlockEntityType<VaultBlockEntity>;
    constructor(arg0: (param0: T, param1: BlockPos) => unknown, arg1: Block[], arg2: boolean)
    // private canPotentiallyExecuteCommands: boolean;
    onlyOpCanSetNbt(): boolean;
}