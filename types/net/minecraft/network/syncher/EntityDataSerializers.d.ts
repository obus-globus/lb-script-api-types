import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataSerializersAccessor } from '../../../../net/fabricmc/fabric/mixin/object/builder/EntityDataSerializersAccessor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Rotations } from '../../../../net/minecraft/core/Rotations.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { EntityDataSerializer } from '../../../../net/minecraft/network/syncher/EntityDataSerializer.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { Pose } from '../../../../net/minecraft/world/entity/Pose.d.ts'
import type { Armadillo$ArmadilloState } from '../../../../net/minecraft/world/entity/animal/armadillo/Armadillo$ArmadilloState.d.ts'
import type { CopperGolemState } from '../../../../net/minecraft/world/entity/animal/golem/CopperGolemState.d.ts'
import type { Sniffer$State } from '../../../../net/minecraft/world/entity/animal/sniffer/Sniffer$State.d.ts'
import type { VillagerData } from '../../../../net/minecraft/world/entity/npc/villager/VillagerData.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ResolvableProfile } from '../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Quaternionfc } from '../../../../org/joml/Quaternionfc.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
export class EntityDataSerializers extends Object implements EntityDataSerializersAccessor {
    static ARMADILLO_STATE: EntityDataSerializer<Armadillo$ArmadilloState>;
    static BLOCK_POS: EntityDataSerializer<BlockPos>;
    static BLOCK_STATE: EntityDataSerializer<BlockState>;
    static BOOLEAN: EntityDataSerializer<boolean>;
    static BYTE: EntityDataSerializer<number>;
    static CAT_SOUND_VARIANT: EntityDataSerializer<Object>;
    static CAT_VARIANT: EntityDataSerializer<Object>;
    static CHICKEN_SOUND_VARIANT: EntityDataSerializer<Object>;
    static CHICKEN_VARIANT: EntityDataSerializer<Object>;
    static COMPONENT: EntityDataSerializer<Component>;
    static COPPER_GOLEM_STATE: EntityDataSerializer<CopperGolemState>;
    static COW_SOUND_VARIANT: EntityDataSerializer<Object>;
    static COW_VARIANT: EntityDataSerializer<Object>;
    static DIRECTION: EntityDataSerializer<Direction>;
    static FLOAT: EntityDataSerializer<number>;
    static FROG_VARIANT: EntityDataSerializer<Object>;
    static HUMANOID_ARM: EntityDataSerializer<HumanoidArm>;
    static INT: EntityDataSerializer<number>;
    static ITEM_STACK: EntityDataSerializer<ItemStack>;
    static LONG: EntityDataSerializer<number>;
    static OPTIONAL_BLOCK_POS: EntityDataSerializer<Object>;
    static OPTIONAL_BLOCK_STATE: EntityDataSerializer<Object>;
    static OPTIONAL_COMPONENT: EntityDataSerializer<Object>;
    static OPTIONAL_GLOBAL_POS: EntityDataSerializer<Object>;
    static OPTIONAL_LIVING_ENTITY_REFERENCE: EntityDataSerializer<Object>;
    static OPTIONAL_UNSIGNED_INT: EntityDataSerializer<OptionalInt>;
    static PAINTING_VARIANT: EntityDataSerializer<Object>;
    static PARTICLE: EntityDataSerializer<ParticleOptions>;
    static PARTICLES: EntityDataSerializer<Object>;
    static PIG_SOUND_VARIANT: EntityDataSerializer<Object>;
    static PIG_VARIANT: EntityDataSerializer<Object>;
    static POSE: EntityDataSerializer<Pose>;
    static QUATERNION: EntityDataSerializer<Quaternionfc>;
    static RESOLVABLE_PROFILE: EntityDataSerializer<ResolvableProfile>;
    static ROTATIONS: EntityDataSerializer<Rotations>;
    static SNIFFER_STATE: EntityDataSerializer<Sniffer$State>;
    static STRING: EntityDataSerializer<string>;
    static VECTOR3: EntityDataSerializer<Vector3fc>;
    static VILLAGER_DATA: EntityDataSerializer<VillagerData>;
    static WEATHERING_COPPER_STATE: EntityDataSerializer<WeatheringCopper$WeatherState>;
    static WOLF_SOUND_VARIANT: EntityDataSerializer<Object>;
    static WOLF_VARIANT: EntityDataSerializer<Object>;
    static ZOMBIE_NAUTILUS_VARIANT: EntityDataSerializer<Object>;
    static fabric_getDataHandlers(): (Object | null)[];
    static getSerializedId(paramserializer: EntityDataSerializer<Object>): number;
    static getSerializer(paramid: number): EntityDataSerializer<Object>;
    static registerSerializer(paramserializer: EntityDataSerializer<Object>): void;
    private constructor()
}