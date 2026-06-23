import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AdultSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/AdultSensor.d.ts'
import type { AxolotlAttackablesSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/AxolotlAttackablesSensor.d.ts'
import type { BreezeAttackEntitySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/BreezeAttackEntitySensor.d.ts'
import type { DummySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/DummySensor.d.ts'
import type { FrogAttackablesSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/FrogAttackablesSensor.d.ts'
import type { GolemSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/GolemSensor.d.ts'
import type { HoglinSpecificSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/HoglinSpecificSensor.d.ts'
import type { HurtBySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/HurtBySensor.d.ts'
import type { IsInWaterSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/IsInWaterSensor.d.ts'
import type { MobSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/MobSensor.d.ts'
import type { NearestBedSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/NearestBedSensor.d.ts'
import type { NearestItemSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/NearestItemSensor.d.ts'
import type { NearestLivingEntitySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/NearestLivingEntitySensor.d.ts'
import type { PiglinBruteSpecificSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/PiglinBruteSpecificSensor.d.ts'
import type { PiglinSpecificSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/PiglinSpecificSensor.d.ts'
import type { PlayerSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/PlayerSensor.d.ts'
import type { SecondaryPoiSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/SecondaryPoiSensor.d.ts'
import type { Sensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
import type { TemptingSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/TemptingSensor.d.ts'
import type { VillagerBabiesSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/VillagerBabiesSensor.d.ts'
import type { VillagerHostilesSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/VillagerHostilesSensor.d.ts'
import type { WardenEntitySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/WardenEntitySensor.d.ts'
import type { Armadillo } from '../../../../../../net/minecraft/world/entity/animal/armadillo/Armadillo.d.ts'
export class SensorType<U extends Sensor<any>> extends Object {
    static ARMADILLO_SCARE_DETECTED: SensorType<MobSensor<Armadillo>>;
    static AXOLOTL_ATTACKABLES: SensorType<AxolotlAttackablesSensor>;
    static BREEZE_ATTACK_ENTITY_SENSOR: SensorType<BreezeAttackEntitySensor>;
    static DUMMY: SensorType<DummySensor>;
    static FOOD_TEMPTATIONS: SensorType<TemptingSensor>;
    static FROG_ATTACKABLES: SensorType<FrogAttackablesSensor>;
    static FROG_TEMPTATIONS: SensorType<TemptingSensor>;
    static GOLEM_DETECTED: SensorType<GolemSensor>;
    static HOGLIN_SPECIFIC_SENSOR: SensorType<HoglinSpecificSensor>;
    static HURT_BY: SensorType<HurtBySensor>;
    static IS_IN_WATER: SensorType<IsInWaterSensor>;
    static NAUTILUS_TEMPTATIONS: SensorType<TemptingSensor>;
    static NEAREST_ADULT: SensorType<AdultSensor>;
    static NEAREST_ADULT_ANY_TYPE: SensorType<AdultSensor>;
    static NEAREST_BED: SensorType<NearestBedSensor>;
    static NEAREST_ITEMS: SensorType<NearestItemSensor>;
    static NEAREST_LIVING_ENTITIES: SensorType<NearestLivingEntitySensor<LivingEntity>>;
    static NEAREST_PLAYERS: SensorType<PlayerSensor>;
    static PIGLIN_BRUTE_SPECIFIC_SENSOR: SensorType<PiglinBruteSpecificSensor>;
    static PIGLIN_SPECIFIC_SENSOR: SensorType<PiglinSpecificSensor>;
    static SECONDARY_POIS: SensorType<SecondaryPoiSensor>;
    static VILLAGER_BABIES: SensorType<VillagerBabiesSensor>;
    static VILLAGER_HOSTILES: SensorType<VillagerHostilesSensor>;
    static WARDEN_ENTITY_SENSOR: SensorType<WardenEntitySensor>;
    constructor(factory: () => U)
    // private factory: () => U;
    create(): U;
}