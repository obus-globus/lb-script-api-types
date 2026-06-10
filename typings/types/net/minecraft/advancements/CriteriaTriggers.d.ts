import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CriterionTrigger } from '../../../net/minecraft/advancements/CriterionTrigger.d.ts'
import type { AnyBlockInteractionTrigger } from '../../../net/minecraft/advancements/criterion/AnyBlockInteractionTrigger.d.ts'
import type { BeeNestDestroyedTrigger } from '../../../net/minecraft/advancements/criterion/BeeNestDestroyedTrigger.d.ts'
import type { BredAnimalsTrigger } from '../../../net/minecraft/advancements/criterion/BredAnimalsTrigger.d.ts'
import type { BrewedPotionTrigger } from '../../../net/minecraft/advancements/criterion/BrewedPotionTrigger.d.ts'
import type { ChangeDimensionTrigger } from '../../../net/minecraft/advancements/criterion/ChangeDimensionTrigger.d.ts'
import type { ChanneledLightningTrigger } from '../../../net/minecraft/advancements/criterion/ChanneledLightningTrigger.d.ts'
import type { ConstructBeaconTrigger } from '../../../net/minecraft/advancements/criterion/ConstructBeaconTrigger.d.ts'
import type { ConsumeItemTrigger } from '../../../net/minecraft/advancements/criterion/ConsumeItemTrigger.d.ts'
import type { CuredZombieVillagerTrigger } from '../../../net/minecraft/advancements/criterion/CuredZombieVillagerTrigger.d.ts'
import type { DefaultBlockInteractionTrigger } from '../../../net/minecraft/advancements/criterion/DefaultBlockInteractionTrigger.d.ts'
import type { DistanceTrigger } from '../../../net/minecraft/advancements/criterion/DistanceTrigger.d.ts'
import type { EffectsChangedTrigger } from '../../../net/minecraft/advancements/criterion/EffectsChangedTrigger.d.ts'
import type { EnchantedItemTrigger } from '../../../net/minecraft/advancements/criterion/EnchantedItemTrigger.d.ts'
import type { EnterBlockTrigger } from '../../../net/minecraft/advancements/criterion/EnterBlockTrigger.d.ts'
import type { EntityHurtPlayerTrigger } from '../../../net/minecraft/advancements/criterion/EntityHurtPlayerTrigger.d.ts'
import type { FallAfterExplosionTrigger } from '../../../net/minecraft/advancements/criterion/FallAfterExplosionTrigger.d.ts'
import type { FilledBucketTrigger } from '../../../net/minecraft/advancements/criterion/FilledBucketTrigger.d.ts'
import type { FishingRodHookedTrigger } from '../../../net/minecraft/advancements/criterion/FishingRodHookedTrigger.d.ts'
import type { ImpossibleTrigger } from '../../../net/minecraft/advancements/criterion/ImpossibleTrigger.d.ts'
import type { InventoryChangeTrigger } from '../../../net/minecraft/advancements/criterion/InventoryChangeTrigger.d.ts'
import type { ItemDurabilityTrigger } from '../../../net/minecraft/advancements/criterion/ItemDurabilityTrigger.d.ts'
import type { ItemUsedOnLocationTrigger } from '../../../net/minecraft/advancements/criterion/ItemUsedOnLocationTrigger.d.ts'
import type { KilledByArrowTrigger } from '../../../net/minecraft/advancements/criterion/KilledByArrowTrigger.d.ts'
import type { KilledTrigger } from '../../../net/minecraft/advancements/criterion/KilledTrigger.d.ts'
import type { LevitationTrigger } from '../../../net/minecraft/advancements/criterion/LevitationTrigger.d.ts'
import type { LightningStrikeTrigger } from '../../../net/minecraft/advancements/criterion/LightningStrikeTrigger.d.ts'
import type { LootTableTrigger } from '../../../net/minecraft/advancements/criterion/LootTableTrigger.d.ts'
import type { PickedUpItemTrigger } from '../../../net/minecraft/advancements/criterion/PickedUpItemTrigger.d.ts'
import type { PlayerHurtEntityTrigger } from '../../../net/minecraft/advancements/criterion/PlayerHurtEntityTrigger.d.ts'
import type { PlayerInteractTrigger } from '../../../net/minecraft/advancements/criterion/PlayerInteractTrigger.d.ts'
import type { PlayerTrigger } from '../../../net/minecraft/advancements/criterion/PlayerTrigger.d.ts'
import type { RecipeCraftedTrigger } from '../../../net/minecraft/advancements/criterion/RecipeCraftedTrigger.d.ts'
import type { RecipeUnlockedTrigger } from '../../../net/minecraft/advancements/criterion/RecipeUnlockedTrigger.d.ts'
import type { ShotCrossbowTrigger } from '../../../net/minecraft/advancements/criterion/ShotCrossbowTrigger.d.ts'
import type { SlideDownBlockTrigger } from '../../../net/minecraft/advancements/criterion/SlideDownBlockTrigger.d.ts'
import type { SpearMobsTrigger } from '../../../net/minecraft/advancements/criterion/SpearMobsTrigger.d.ts'
import type { StartRidingTrigger } from '../../../net/minecraft/advancements/criterion/StartRidingTrigger.d.ts'
import type { SummonedEntityTrigger } from '../../../net/minecraft/advancements/criterion/SummonedEntityTrigger.d.ts'
import type { TameAnimalTrigger } from '../../../net/minecraft/advancements/criterion/TameAnimalTrigger.d.ts'
import type { TargetBlockTrigger } from '../../../net/minecraft/advancements/criterion/TargetBlockTrigger.d.ts'
import type { TradeTrigger } from '../../../net/minecraft/advancements/criterion/TradeTrigger.d.ts'
import type { UsedEnderEyeTrigger } from '../../../net/minecraft/advancements/criterion/UsedEnderEyeTrigger.d.ts'
import type { UsedTotemTrigger } from '../../../net/minecraft/advancements/criterion/UsedTotemTrigger.d.ts'
import type { UsingItemTrigger } from '../../../net/minecraft/advancements/criterion/UsingItemTrigger.d.ts'
export class CriteriaTriggers extends Object {
    static ALLAY_DROP_ITEM_ON_BLOCK: ItemUsedOnLocationTrigger;
    static ANY_BLOCK_USE: AnyBlockInteractionTrigger;
    static AVOID_VIBRATION: PlayerTrigger;
    static BEE_NEST_DESTROYED: BeeNestDestroyedTrigger;
    static BRED_ANIMALS: BredAnimalsTrigger;
    static BREWED_POTION: BrewedPotionTrigger;
    static CHANGED_DIMENSION: ChangeDimensionTrigger;
    static CHANNELED_LIGHTNING: ChanneledLightningTrigger;
    static CODEC: Codec<CriterionTrigger<Object>>;
    static CONSTRUCT_BEACON: ConstructBeaconTrigger;
    static CONSUME_ITEM: ConsumeItemTrigger;
    static CRAFTER_RECIPE_CRAFTED: RecipeCraftedTrigger;
    static CURED_ZOMBIE_VILLAGER: CuredZombieVillagerTrigger;
    static DEFAULT_BLOCK_USE: DefaultBlockInteractionTrigger;
    static EFFECTS_CHANGED: EffectsChangedTrigger;
    static ENCHANTED_ITEM: EnchantedItemTrigger;
    static ENTER_BLOCK: EnterBlockTrigger;
    static ENTITY_HURT_PLAYER: EntityHurtPlayerTrigger;
    static ENTITY_KILLED_PLAYER: KilledTrigger;
    static FALL_AFTER_EXPLOSION: FallAfterExplosionTrigger;
    static FALL_FROM_HEIGHT: DistanceTrigger;
    static FILLED_BUCKET: FilledBucketTrigger;
    static FISHING_ROD_HOOKED: FishingRodHookedTrigger;
    static GENERATE_LOOT: LootTableTrigger;
    static HONEY_BLOCK_SLIDE: SlideDownBlockTrigger;
    static IMPOSSIBLE: ImpossibleTrigger;
    static INVENTORY_CHANGED: InventoryChangeTrigger;
    static ITEM_DURABILITY_CHANGED: ItemDurabilityTrigger;
    static ITEM_USED_ON_BLOCK: ItemUsedOnLocationTrigger;
    static KILLED_BY_ARROW: KilledByArrowTrigger;
    static KILL_MOB_NEAR_SCULK_CATALYST: KilledTrigger;
    static LEVITATION: LevitationTrigger;
    static LIGHTNING_STRIKE: LightningStrikeTrigger;
    static LOCATION: PlayerTrigger;
    static NETHER_TRAVEL: DistanceTrigger;
    static PLACED_BLOCK: ItemUsedOnLocationTrigger;
    static PLAYER_HURT_ENTITY: PlayerHurtEntityTrigger;
    static PLAYER_INTERACTED_WITH_ENTITY: PlayerInteractTrigger;
    static PLAYER_KILLED_ENTITY: KilledTrigger;
    static PLAYER_SHEARED_EQUIPMENT: PlayerInteractTrigger;
    static RAID_OMEN: PlayerTrigger;
    static RAID_WIN: PlayerTrigger;
    static RECIPE_CRAFTED: RecipeCraftedTrigger;
    static RECIPE_UNLOCKED: RecipeUnlockedTrigger;
    static RIDE_ENTITY_IN_LAVA_TRIGGER: DistanceTrigger;
    static SHOT_CROSSBOW: ShotCrossbowTrigger;
    static SLEPT_IN_BED: PlayerTrigger;
    static SPEAR_MOBS_TRIGGER: SpearMobsTrigger;
    static START_RIDING_TRIGGER: StartRidingTrigger;
    static SUMMONED_ENTITY: SummonedEntityTrigger;
    static TAME_ANIMAL: TameAnimalTrigger;
    static TARGET_BLOCK_HIT: TargetBlockTrigger;
    static THROWN_ITEM_PICKED_UP_BY_ENTITY: PickedUpItemTrigger;
    static THROWN_ITEM_PICKED_UP_BY_PLAYER: PickedUpItemTrigger;
    static TICK: PlayerTrigger;
    static TRADE: TradeTrigger;
    static USED_ENDER_EYE: UsedEnderEyeTrigger;
    static USED_TOTEM: UsedTotemTrigger;
    static USING_ITEM: UsingItemTrigger;
    static bootstrap(paramregistry: CriterionTrigger<Object>[]): CriterionTrigger<Object>;
    static register(paramname: string, paramcriterion: Object | null): Object | null;
    constructor()
}