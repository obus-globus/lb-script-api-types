import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { FrontAndTop } from '../../../../../../../net/minecraft/core/FrontAndTop.d.ts'
import type { CopperGolemStatueBlock$Pose } from '../../../../../../../net/minecraft/world/level/block/CopperGolemStatueBlock$Pose.d.ts'
import type { TrialSpawnerState } from '../../../../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerState.d.ts'
import type { VaultState } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultState.d.ts'
import type { AttachFace } from '../../../../../../../net/minecraft/world/level/block/state/properties/AttachFace.d.ts'
import type { BambooLeaves } from '../../../../../../../net/minecraft/world/level/block/state/properties/BambooLeaves.d.ts'
import type { BedPart } from '../../../../../../../net/minecraft/world/level/block/state/properties/BedPart.d.ts'
import type { BellAttachType } from '../../../../../../../net/minecraft/world/level/block/state/properties/BellAttachType.d.ts'
import type { BooleanProperty } from '../../../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { ChestType } from '../../../../../../../net/minecraft/world/level/block/state/properties/ChestType.d.ts'
import type { ComparatorMode } from '../../../../../../../net/minecraft/world/level/block/state/properties/ComparatorMode.d.ts'
import type { CreakingHeartState } from '../../../../../../../net/minecraft/world/level/block/state/properties/CreakingHeartState.d.ts'
import type { DoorHingeSide } from '../../../../../../../net/minecraft/world/level/block/state/properties/DoorHingeSide.d.ts'
import type { DoubleBlockHalf } from '../../../../../../../net/minecraft/world/level/block/state/properties/DoubleBlockHalf.d.ts'
import type { EnumProperty } from '../../../../../../../net/minecraft/world/level/block/state/properties/EnumProperty.d.ts'
import type { Half } from '../../../../../../../net/minecraft/world/level/block/state/properties/Half.d.ts'
import type { IntegerProperty } from '../../../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { NoteBlockInstrument } from '../../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
import type { PistonType } from '../../../../../../../net/minecraft/world/level/block/state/properties/PistonType.d.ts'
import type { PotentSulfurState } from '../../../../../../../net/minecraft/world/level/block/state/properties/PotentSulfurState.d.ts'
import type { RailShape } from '../../../../../../../net/minecraft/world/level/block/state/properties/RailShape.d.ts'
import type { RedstoneSide } from '../../../../../../../net/minecraft/world/level/block/state/properties/RedstoneSide.d.ts'
import type { SculkSensorPhase } from '../../../../../../../net/minecraft/world/level/block/state/properties/SculkSensorPhase.d.ts'
import type { SideChainPart } from '../../../../../../../net/minecraft/world/level/block/state/properties/SideChainPart.d.ts'
import type { SlabType } from '../../../../../../../net/minecraft/world/level/block/state/properties/SlabType.d.ts'
import type { SpeleothemThickness } from '../../../../../../../net/minecraft/world/level/block/state/properties/SpeleothemThickness.d.ts'
import type { StairsShape } from '../../../../../../../net/minecraft/world/level/block/state/properties/StairsShape.d.ts'
import type { StructureMode } from '../../../../../../../net/minecraft/world/level/block/state/properties/StructureMode.d.ts'
import type { TestBlockMode } from '../../../../../../../net/minecraft/world/level/block/state/properties/TestBlockMode.d.ts'
import type { Tilt } from '../../../../../../../net/minecraft/world/level/block/state/properties/Tilt.d.ts'
import type { WallSide } from '../../../../../../../net/minecraft/world/level/block/state/properties/WallSide.d.ts'
export class BlockStateProperties extends Object {
    static AGE_1: IntegerProperty;
    static AGE_15: IntegerProperty;
    static AGE_2: IntegerProperty;
    static AGE_25: IntegerProperty;
    static AGE_3: IntegerProperty;
    static AGE_4: IntegerProperty;
    static AGE_5: IntegerProperty;
    static AGE_7: IntegerProperty;
    static ATTACHED: BooleanProperty;
    static ATTACH_FACE: EnumProperty<AttachFace>;
    static AXIS: EnumProperty<Direction$Axis>;
    static BAMBOO_LEAVES: EnumProperty<BambooLeaves>;
    static BED_PART: EnumProperty<BedPart>;
    static BELL_ATTACHMENT: EnumProperty<BellAttachType>;
    static BERRIES: BooleanProperty;
    static BITES: IntegerProperty;
    static BLOOM: BooleanProperty;
    static BOTTOM: BooleanProperty;
    static CANDLES: IntegerProperty;
    static CAN_SUMMON: BooleanProperty;
    static CHEST_TYPE: EnumProperty<ChestType>;
    static CONDITIONAL: BooleanProperty;
    static COPPER_GOLEM_POSE: EnumProperty<CopperGolemStatueBlock$Pose>;
    static CRACKED: BooleanProperty;
    static CRAFTING: BooleanProperty;
    static CREAKING_HEART_STATE: EnumProperty<CreakingHeartState>;
    static DELAY: IntegerProperty;
    static DISARMED: BooleanProperty;
    static DISTANCE: IntegerProperty;
    static DOOR_HINGE: EnumProperty<DoorHingeSide>;
    static DOUBLE_BLOCK_HALF: EnumProperty<DoubleBlockHalf>;
    static DOWN: BooleanProperty;
    static DRAG: BooleanProperty;
    static DRIED_GHAST_HYDRATION_LEVELS: IntegerProperty;
    static DUSTED: IntegerProperty;
    static EAST: BooleanProperty;
    static EAST_REDSTONE: EnumProperty<RedstoneSide>;
    static EAST_WALL: EnumProperty<WallSide>;
    static EGGS: IntegerProperty;
    static ENABLED: BooleanProperty;
    static EXTENDED: BooleanProperty;
    static EYE: BooleanProperty;
    static FACING: EnumProperty<Direction>;
    static FACING_HOPPER: EnumProperty<Direction>;
    static FALLING: BooleanProperty;
    static FLOWER_AMOUNT: IntegerProperty;
    static HALF: EnumProperty<Half>;
    static HANGING: BooleanProperty;
    static HAS_BOOK: BooleanProperty;
    static HAS_BOTTLE_0: BooleanProperty;
    static HAS_BOTTLE_1: BooleanProperty;
    static HAS_BOTTLE_2: BooleanProperty;
    static HAS_RECORD: BooleanProperty;
    static HATCH: IntegerProperty;
    static HORIZONTAL_AXIS: EnumProperty<Direction$Axis>;
    static HORIZONTAL_FACING: EnumProperty<Direction>;
    static INVERTED: BooleanProperty;
    static IN_WALL: BooleanProperty;
    static LAYERS: IntegerProperty;
    static LEVEL: IntegerProperty;
    static LEVEL_CAULDRON: IntegerProperty;
    static LEVEL_COMPOSTER: IntegerProperty;
    static LEVEL_FLOWING: IntegerProperty;
    static LEVEL_HONEY: IntegerProperty;
    static LIT: BooleanProperty;
    static LOCKED: BooleanProperty;
    static MAP: BooleanProperty;
    static MAX_AGE_1: number;
    static MAX_AGE_15: number;
    static MAX_AGE_2: number;
    static MAX_AGE_25: number;
    static MAX_AGE_3: number;
    static MAX_AGE_4: number;
    static MAX_AGE_5: number;
    static MAX_AGE_7: number;
    static MAX_DISTANCE: number;
    static MAX_LEVEL_15: number;
    static MAX_LEVEL_3: number;
    static MAX_LEVEL_8: number;
    static MAX_RESPAWN_ANCHOR_CHARGES: number;
    static MIN_LEVEL: number;
    static MIN_LEVEL_CAULDRON: number;
    static MIN_RESPAWN_ANCHOR_CHARGES: number;
    static MODE_COMPARATOR: EnumProperty<ComparatorMode>;
    static MOISTURE: IntegerProperty;
    static NATURAL: BooleanProperty;
    static NORTH: BooleanProperty;
    static NORTH_REDSTONE: EnumProperty<RedstoneSide>;
    static NORTH_WALL: EnumProperty<WallSide>;
    static NOTE: IntegerProperty;
    static NOTEBLOCK_INSTRUMENT: EnumProperty<NoteBlockInstrument>;
    static OCCUPIED: BooleanProperty;
    static OMINOUS: BooleanProperty;
    static OPEN: BooleanProperty;
    static ORIENTATION: EnumProperty<FrontAndTop>;
    static PERSISTENT: BooleanProperty;
    static PICKLES: IntegerProperty;
    static PISTON_TYPE: EnumProperty<PistonType>;
    static POTENT_SULFUR_STATE: EnumProperty<PotentSulfurState>;
    static POWER: IntegerProperty;
    static POWERED: BooleanProperty;
    static RAIL_SHAPE: EnumProperty<RailShape>;
    static RAIL_SHAPE_STRAIGHT: EnumProperty<RailShape>;
    static RESPAWN_ANCHOR_CHARGES: IntegerProperty;
    static ROTATION_16: IntegerProperty;
    static SCULK_SENSOR_PHASE: EnumProperty<SculkSensorPhase>;
    static SEGMENT_AMOUNT: IntegerProperty;
    static SHORT: BooleanProperty;
    static SHRIEKING: BooleanProperty;
    static SIDE_CHAIN_PART: EnumProperty<SideChainPart>;
    static SIGNAL_FIRE: BooleanProperty;
    static SLAB_TYPE: EnumProperty<SlabType>;
    static SLOT_0_OCCUPIED: BooleanProperty;
    static SLOT_1_OCCUPIED: BooleanProperty;
    static SLOT_2_OCCUPIED: BooleanProperty;
    static SLOT_3_OCCUPIED: BooleanProperty;
    static SLOT_4_OCCUPIED: BooleanProperty;
    static SLOT_5_OCCUPIED: BooleanProperty;
    static SNOWY: BooleanProperty;
    static SOUTH: BooleanProperty;
    static SOUTH_REDSTONE: EnumProperty<RedstoneSide>;
    static SOUTH_WALL: EnumProperty<WallSide>;
    static SPELEOTHEM_THICKNESS: EnumProperty<SpeleothemThickness>;
    static STABILITY_DISTANCE: IntegerProperty;
    static STABILITY_MAX_DISTANCE: number;
    static STAGE: IntegerProperty;
    static STAIRS_SHAPE: EnumProperty<StairsShape>;
    static STRUCTUREBLOCK_MODE: EnumProperty<StructureMode>;
    static TEST_BLOCK_MODE: EnumProperty<TestBlockMode>;
    static TILT: EnumProperty<Tilt>;
    static TIP: BooleanProperty;
    static TRIAL_SPAWNER_STATE: EnumProperty<TrialSpawnerState>;
    static TRIGGERED: BooleanProperty;
    static UNSTABLE: BooleanProperty;
    static UP: BooleanProperty;
    static VAULT_STATE: EnumProperty<VaultState>;
    static VERTICAL_DIRECTION: EnumProperty<Direction>;
    static WATERLOGGED: BooleanProperty;
    static WEST: BooleanProperty;
    static WEST_REDSTONE: EnumProperty<RedstoneSide>;
    static WEST_WALL: EnumProperty<WallSide>;
    constructor()
}