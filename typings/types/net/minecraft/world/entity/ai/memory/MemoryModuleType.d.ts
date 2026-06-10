import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { Unit } from '../../../../../../net/minecraft/util/Unit.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { AgeableMob } from '../../../../../../net/minecraft/world/entity/AgeableMob.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PositionTracker } from '../../../../../../net/minecraft/world/entity/ai/behavior/PositionTracker.d.ts'
import type { SpearAttack$SpearStatus } from '../../../../../../net/minecraft/world/entity/ai/behavior/SpearAttack$SpearStatus.d.ts'
import type { ExpirableValue } from '../../../../../../net/minecraft/world/entity/ai/memory/ExpirableValue.d.ts'
import type { NearestVisibleLivingEntities } from '../../../../../../net/minecraft/world/entity/ai/memory/NearestVisibleLivingEntities.d.ts'
import type { WalkTarget } from '../../../../../../net/minecraft/world/entity/ai/memory/WalkTarget.d.ts'
import type { ItemEntity } from '../../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Hoglin } from '../../../../../../net/minecraft/world/entity/monster/hoglin/Hoglin.d.ts'
import type { AbstractPiglin } from '../../../../../../net/minecraft/world/entity/monster/piglin/AbstractPiglin.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class MemoryModuleType<U extends Object | number | string | boolean> extends Object {
    static ADMIRING_DISABLED: MemoryModuleType<boolean>;
    static ADMIRING_ITEM: MemoryModuleType<boolean>;
    static ANGRY_AT: MemoryModuleType<UUID>;
    static ATE_RECENTLY: MemoryModuleType<boolean>;
    static ATTACK_COOLING_DOWN: MemoryModuleType<boolean>;
    static ATTACK_TARGET: MemoryModuleType<LivingEntity>;
    static ATTACK_TARGET_COOLDOWN: MemoryModuleType<number>;
    static AVOID_TARGET: MemoryModuleType<LivingEntity>;
    static BREED_TARGET: MemoryModuleType<AgeableMob>;
    static BREEZE_JUMP_COOLDOWN: MemoryModuleType<Unit>;
    static BREEZE_JUMP_INHALING: MemoryModuleType<Unit>;
    static BREEZE_JUMP_TARGET: MemoryModuleType<BlockPos>;
    static BREEZE_LEAVING_WATER: MemoryModuleType<Unit>;
    static BREEZE_SHOOT: MemoryModuleType<Unit>;
    static BREEZE_SHOOT_CHARGING: MemoryModuleType<Unit>;
    static BREEZE_SHOOT_COOLDOWN: MemoryModuleType<Unit>;
    static BREEZE_SHOOT_RECOVERING: MemoryModuleType<Unit>;
    static CANT_REACH_WALK_TARGET_SINCE: MemoryModuleType<number>;
    static CELEBRATE_LOCATION: MemoryModuleType<BlockPos>;
    static CHARGE_COOLDOWN_TICKS: MemoryModuleType<number>;
    static DANCING: MemoryModuleType<boolean>;
    static DANGER_DETECTED_RECENTLY: MemoryModuleType<boolean>;
    static DIG_COOLDOWN: MemoryModuleType<Unit>;
    static DISABLE_WALK_TO_ADMIRE_ITEM: MemoryModuleType<boolean>;
    static DISTURBANCE_LOCATION: MemoryModuleType<BlockPos>;
    static DOORS_TO_CLOSE: MemoryModuleType<GlobalPos[]>;
    static DUMMY: MemoryModuleType<void>;
    static GAZE_COOLDOWN_TICKS: MemoryModuleType<number>;
    static GOLEM_DETECTED_RECENTLY: MemoryModuleType<boolean>;
    static HAS_HUNTING_COOLDOWN: MemoryModuleType<boolean>;
    static HEARD_BELL_TIME: MemoryModuleType<number>;
    static HIDING_PLACE: MemoryModuleType<GlobalPos>;
    static HOME: MemoryModuleType<GlobalPos>;
    static HUNTED_RECENTLY: MemoryModuleType<boolean>;
    static HURT_BY: MemoryModuleType<DamageSource>;
    static HURT_BY_ENTITY: MemoryModuleType<LivingEntity>;
    static INTERACTION_TARGET: MemoryModuleType<LivingEntity>;
    static IS_EMERGING: MemoryModuleType<Unit>;
    static IS_IN_WATER: MemoryModuleType<Unit>;
    static IS_PANICKING: MemoryModuleType<boolean>;
    static IS_PREGNANT: MemoryModuleType<Unit>;
    static IS_SNIFFING: MemoryModuleType<Unit>;
    static IS_TEMPTED: MemoryModuleType<boolean>;
    static ITEM_PICKUP_COOLDOWN_TICKS: MemoryModuleType<number>;
    static JOB_SITE: MemoryModuleType<GlobalPos>;
    static LAST_SLEPT: MemoryModuleType<number>;
    static LAST_WOKEN: MemoryModuleType<number>;
    static LAST_WORKED_AT_POI: MemoryModuleType<number>;
    static LIKED_NOTEBLOCK_COOLDOWN_TICKS: MemoryModuleType<number>;
    static LIKED_NOTEBLOCK_POSITION: MemoryModuleType<GlobalPos>;
    static LIKED_PLAYER: MemoryModuleType<UUID>;
    static LONG_JUMP_COOLDOWN_TICKS: MemoryModuleType<number>;
    static LONG_JUMP_MID_JUMP: MemoryModuleType<boolean>;
    static LOOK_TARGET: MemoryModuleType<PositionTracker>;
    static MEETING_POINT: MemoryModuleType<GlobalPos>;
    static NEARBY_ADULT_PIGLINS: MemoryModuleType<AbstractPiglin[]>;
    static NEAREST_ATTACKABLE: MemoryModuleType<LivingEntity>;
    static NEAREST_BED: MemoryModuleType<BlockPos>;
    static NEAREST_HOSTILE: MemoryModuleType<LivingEntity>;
    static NEAREST_LIVING_ENTITIES: MemoryModuleType<LivingEntity[]>;
    static NEAREST_PLAYERS: MemoryModuleType<Player[]>;
    static NEAREST_PLAYER_HOLDING_WANTED_ITEM: MemoryModuleType<Player>;
    static NEAREST_REPELLENT: MemoryModuleType<BlockPos>;
    static NEAREST_TARGETABLE_PLAYER_NOT_WEARING_GOLD: MemoryModuleType<Player>;
    static NEAREST_VISIBLE_ADULT: MemoryModuleType<LivingEntity>;
    static NEAREST_VISIBLE_ADULT_HOGLINS: MemoryModuleType<Hoglin[]>;
    static NEAREST_VISIBLE_ADULT_PIGLIN: MemoryModuleType<AbstractPiglin>;
    static NEAREST_VISIBLE_ADULT_PIGLINS: MemoryModuleType<AbstractPiglin[]>;
    static NEAREST_VISIBLE_ATTACKABLE_PLAYER: MemoryModuleType<Player>;
    static NEAREST_VISIBLE_ATTACKABLE_PLAYERS: MemoryModuleType<Player[]>;
    static NEAREST_VISIBLE_BABY_HOGLIN: MemoryModuleType<Hoglin>;
    static NEAREST_VISIBLE_HUNTABLE_HOGLIN: MemoryModuleType<Hoglin>;
    static NEAREST_VISIBLE_LIVING_ENTITIES: MemoryModuleType<NearestVisibleLivingEntities>;
    static NEAREST_VISIBLE_NEMESIS: MemoryModuleType<Mob>;
    static NEAREST_VISIBLE_PLAYER: MemoryModuleType<Player>;
    static NEAREST_VISIBLE_WANTED_ITEM: MemoryModuleType<ItemEntity>;
    static NEAREST_VISIBLE_ZOMBIFIED: MemoryModuleType<LivingEntity>;
    static PACIFIED: MemoryModuleType<boolean>;
    static PATH: MemoryModuleType<Path>;
    static PLAY_DEAD_TICKS: MemoryModuleType<number>;
    static POTENTIAL_JOB_SITE: MemoryModuleType<GlobalPos>;
    static RAM_COOLDOWN_TICKS: MemoryModuleType<number>;
    static RAM_TARGET: MemoryModuleType<Vec3>;
    static RECENT_PROJECTILE: MemoryModuleType<Unit>;
    static RIDE_TARGET: MemoryModuleType<Entity>;
    static ROAR_SOUND_COOLDOWN: MemoryModuleType<Unit>;
    static ROAR_SOUND_DELAY: MemoryModuleType<Unit>;
    static ROAR_TARGET: MemoryModuleType<LivingEntity>;
    static SECONDARY_JOB_SITE: MemoryModuleType<GlobalPos[]>;
    static SNIFFER_DIGGING: MemoryModuleType<boolean>;
    static SNIFFER_EXPLORED_POSITIONS: MemoryModuleType<GlobalPos[]>;
    static SNIFFER_HAPPY: MemoryModuleType<boolean>;
    static SNIFFER_SNIFFING_TARGET: MemoryModuleType<BlockPos>;
    static SNIFF_COOLDOWN: MemoryModuleType<Unit>;
    static SONIC_BOOM_COOLDOWN: MemoryModuleType<Unit>;
    static SONIC_BOOM_SOUND_COOLDOWN: MemoryModuleType<Unit>;
    static SONIC_BOOM_SOUND_DELAY: MemoryModuleType<Unit>;
    static SPEAR_CHARGE_POSITION: MemoryModuleType<Vec3>;
    static SPEAR_ENGAGE_TIME: MemoryModuleType<number>;
    static SPEAR_FLEEING_POSITION: MemoryModuleType<Vec3>;
    static SPEAR_FLEEING_TIME: MemoryModuleType<number>;
    static SPEAR_STATUS: MemoryModuleType<SpearAttack$SpearStatus>;
    static TEMPTATION_COOLDOWN_TICKS: MemoryModuleType<number>;
    static TEMPTING_PLAYER: MemoryModuleType<Player>;
    static TIME_TRYING_TO_REACH_ADMIRE_ITEM: MemoryModuleType<number>;
    static TOUCH_COOLDOWN: MemoryModuleType<Unit>;
    static TRANSPORT_ITEMS_COOLDOWN_TICKS: MemoryModuleType<number>;
    static UNIVERSAL_ANGER: MemoryModuleType<boolean>;
    static UNREACHABLE_TONGUE_TARGETS: MemoryModuleType<UUID[]>;
    static UNREACHABLE_TRANSPORT_BLOCK_POSITIONS: MemoryModuleType<GlobalPos[]>;
    static VIBRATION_COOLDOWN: MemoryModuleType<Unit>;
    static VISIBLE_ADULT_HOGLIN_COUNT: MemoryModuleType<number>;
    static VISIBLE_ADULT_PIGLIN_COUNT: MemoryModuleType<number>;
    static VISIBLE_VILLAGER_BABIES: MemoryModuleType<LivingEntity[]>;
    static VISITED_BLOCK_POSITIONS: MemoryModuleType<GlobalPos[]>;
    static WALK_TARGET: MemoryModuleType<WalkTarget>;
    constructor(codec: Optional<Codec<U>>)
    readonly codec: Optional<Codec<ExpirableValue<U>>>;
    canSerialize(): boolean;
    getCodec(): Optional<Codec<ExpirableValue<U>>>;
    toString(): string;
}