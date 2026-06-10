import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataSerializersAccessor } from '../../../../net/fabricmc/fabric/mixin/object/builder/EntityDataSerializersAccessor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { GlobalPos } from '../../../../net/minecraft/core/GlobalPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Rotations } from '../../../../net/minecraft/core/Rotations.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { EntityDataSerializer } from '../../../../net/minecraft/network/syncher/EntityDataSerializer.d.ts'
import type { EntityReference } from '../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Pose } from '../../../../net/minecraft/world/entity/Pose.d.ts'
import type { Armadillo$ArmadilloState } from '../../../../net/minecraft/world/entity/animal/armadillo/Armadillo$ArmadilloState.d.ts'
import type { ChickenSoundVariant } from '../../../../net/minecraft/world/entity/animal/chicken/ChickenSoundVariant.d.ts'
import type { ChickenVariant } from '../../../../net/minecraft/world/entity/animal/chicken/ChickenVariant.d.ts'
import type { CowSoundVariant } from '../../../../net/minecraft/world/entity/animal/cow/CowSoundVariant.d.ts'
import type { CowVariant } from '../../../../net/minecraft/world/entity/animal/cow/CowVariant.d.ts'
import type { CatSoundVariant } from '../../../../net/minecraft/world/entity/animal/feline/CatSoundVariant.d.ts'
import type { CatVariant } from '../../../../net/minecraft/world/entity/animal/feline/CatVariant.d.ts'
import type { FrogVariant } from '../../../../net/minecraft/world/entity/animal/frog/FrogVariant.d.ts'
import type { CopperGolemState } from '../../../../net/minecraft/world/entity/animal/golem/CopperGolemState.d.ts'
import type { ZombieNautilusVariant } from '../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilusVariant.d.ts'
import type { PigSoundVariant } from '../../../../net/minecraft/world/entity/animal/pig/PigSoundVariant.d.ts'
import type { PigVariant } from '../../../../net/minecraft/world/entity/animal/pig/PigVariant.d.ts'
import type { Sniffer$State } from '../../../../net/minecraft/world/entity/animal/sniffer/Sniffer$State.d.ts'
import type { WolfSoundVariant } from '../../../../net/minecraft/world/entity/animal/wolf/WolfSoundVariant.d.ts'
import type { WolfVariant } from '../../../../net/minecraft/world/entity/animal/wolf/WolfVariant.d.ts'
import type { PaintingVariant } from '../../../../net/minecraft/world/entity/decoration/painting/PaintingVariant.d.ts'
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
    static CAT_SOUND_VARIANT: EntityDataSerializer<Holder<CatSoundVariant>>;
    static CAT_VARIANT: EntityDataSerializer<Holder<CatVariant>>;
    static CHICKEN_SOUND_VARIANT: EntityDataSerializer<Holder<ChickenSoundVariant>>;
    static CHICKEN_VARIANT: EntityDataSerializer<Holder<ChickenVariant>>;
    static COMPONENT: EntityDataSerializer<Component>;
    static COPPER_GOLEM_STATE: EntityDataSerializer<CopperGolemState>;
    static COW_SOUND_VARIANT: EntityDataSerializer<Holder<CowSoundVariant>>;
    static COW_VARIANT: EntityDataSerializer<Holder<CowVariant>>;
    static DIRECTION: EntityDataSerializer<Direction>;
    static FLOAT: EntityDataSerializer<number>;
    static FROG_VARIANT: EntityDataSerializer<Holder<FrogVariant>>;
    static HUMANOID_ARM: EntityDataSerializer<HumanoidArm>;
    static INT: EntityDataSerializer<number>;
    static ITEM_STACK: EntityDataSerializer<ItemStack>;
    static LONG: EntityDataSerializer<number>;
    static OPTIONAL_BLOCK_POS: EntityDataSerializer<Optional<BlockPos>>;
    static OPTIONAL_BLOCK_STATE: EntityDataSerializer<Optional<BlockState>>;
    static OPTIONAL_COMPONENT: EntityDataSerializer<Optional<Component>>;
    static OPTIONAL_GLOBAL_POS: EntityDataSerializer<Optional<GlobalPos>>;
    static OPTIONAL_LIVING_ENTITY_REFERENCE: EntityDataSerializer<Optional<EntityReference<LivingEntity>>>;
    static OPTIONAL_UNSIGNED_INT: EntityDataSerializer<OptionalInt>;
    static PAINTING_VARIANT: EntityDataSerializer<Holder<PaintingVariant>>;
    static PARTICLE: EntityDataSerializer<ParticleOptions>;
    static PARTICLES: EntityDataSerializer<ParticleOptions[]>;
    static PIG_SOUND_VARIANT: EntityDataSerializer<Holder<PigSoundVariant>>;
    static PIG_VARIANT: EntityDataSerializer<Holder<PigVariant>>;
    static POSE: EntityDataSerializer<Pose>;
    static QUATERNION: EntityDataSerializer<Quaternionfc>;
    static RESOLVABLE_PROFILE: EntityDataSerializer<ResolvableProfile>;
    static ROTATIONS: EntityDataSerializer<Rotations>;
    static SNIFFER_STATE: EntityDataSerializer<Sniffer$State>;
    static STRING: EntityDataSerializer<string>;
    static VECTOR3: EntityDataSerializer<Vector3fc>;
    static VILLAGER_DATA: EntityDataSerializer<VillagerData>;
    static WEATHERING_COPPER_STATE: EntityDataSerializer<WeatheringCopper$WeatherState>;
    static WOLF_SOUND_VARIANT: EntityDataSerializer<Holder<WolfSoundVariant>>;
    static WOLF_VARIANT: EntityDataSerializer<Holder<WolfVariant>>;
    static ZOMBIE_NAUTILUS_VARIANT: EntityDataSerializer<Holder<ZombieNautilusVariant>>;
    static fabric_getDataHandlers(): EntityDataSerializer<Object>[];
    static getSerializedId(paramserializer: EntityDataSerializer<Object>): number;
    static getSerializer(paramid: number): EntityDataSerializer<Object>;
    static registerSerializer(paramserializer: EntityDataSerializer<Object>): void;
    private constructor()
}