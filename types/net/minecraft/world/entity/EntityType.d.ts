import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricEntityTypeImpl } from '../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { AreaEffectCloud } from '../../../../net/minecraft/world/entity/AreaEffectCloud.d.ts'
import type { Display$BlockDisplay } from '../../../../net/minecraft/world/entity/Display$BlockDisplay.d.ts'
import type { Display$ItemDisplay } from '../../../../net/minecraft/world/entity/Display$ItemDisplay.d.ts'
import type { Display$TextDisplay } from '../../../../net/minecraft/world/entity/Display$TextDisplay.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityProcessor } from '../../../../net/minecraft/world/entity/EntityProcessor.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType$EntityFactory } from '../../../../net/minecraft/world/entity/EntityType$EntityFactory.d.ts'
import type { ExperienceOrb } from '../../../../net/minecraft/world/entity/ExperienceOrb.d.ts'
import type { Interaction } from '../../../../net/minecraft/world/entity/Interaction.d.ts'
import type { LightningBolt } from '../../../../net/minecraft/world/entity/LightningBolt.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Marker } from '../../../../net/minecraft/world/entity/Marker.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { OminousItemSpawner } from '../../../../net/minecraft/world/entity/OminousItemSpawner.d.ts'
import type { Bat } from '../../../../net/minecraft/world/entity/ambient/Bat.d.ts'
import type { Allay } from '../../../../net/minecraft/world/entity/animal/allay/Allay.d.ts'
import type { Armadillo } from '../../../../net/minecraft/world/entity/animal/armadillo/Armadillo.d.ts'
import type { Axolotl } from '../../../../net/minecraft/world/entity/animal/axolotl/Axolotl.d.ts'
import type { Bee } from '../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
import type { Camel } from '../../../../net/minecraft/world/entity/animal/camel/Camel.d.ts'
import type { CamelHusk } from '../../../../net/minecraft/world/entity/animal/camel/CamelHusk.d.ts'
import type { Chicken } from '../../../../net/minecraft/world/entity/animal/chicken/Chicken.d.ts'
import type { Cow } from '../../../../net/minecraft/world/entity/animal/cow/Cow.d.ts'
import type { MushroomCow } from '../../../../net/minecraft/world/entity/animal/cow/MushroomCow.d.ts'
import type { Dolphin } from '../../../../net/minecraft/world/entity/animal/dolphin/Dolphin.d.ts'
import type { Donkey } from '../../../../net/minecraft/world/entity/animal/equine/Donkey.d.ts'
import type { Horse } from '../../../../net/minecraft/world/entity/animal/equine/Horse.d.ts'
import type { Llama } from '../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { Mule } from '../../../../net/minecraft/world/entity/animal/equine/Mule.d.ts'
import type { SkeletonHorse } from '../../../../net/minecraft/world/entity/animal/equine/SkeletonHorse.d.ts'
import type { TraderLlama } from '../../../../net/minecraft/world/entity/animal/equine/TraderLlama.d.ts'
import type { ZombieHorse } from '../../../../net/minecraft/world/entity/animal/equine/ZombieHorse.d.ts'
import type { Cat } from '../../../../net/minecraft/world/entity/animal/feline/Cat.d.ts'
import type { Ocelot } from '../../../../net/minecraft/world/entity/animal/feline/Ocelot.d.ts'
import type { Cod } from '../../../../net/minecraft/world/entity/animal/fish/Cod.d.ts'
import type { Pufferfish } from '../../../../net/minecraft/world/entity/animal/fish/Pufferfish.d.ts'
import type { Salmon } from '../../../../net/minecraft/world/entity/animal/fish/Salmon.d.ts'
import type { TropicalFish } from '../../../../net/minecraft/world/entity/animal/fish/TropicalFish.d.ts'
import type { Fox } from '../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
import type { Frog } from '../../../../net/minecraft/world/entity/animal/frog/Frog.d.ts'
import type { Tadpole } from '../../../../net/minecraft/world/entity/animal/frog/Tadpole.d.ts'
import type { Goat } from '../../../../net/minecraft/world/entity/animal/goat/Goat.d.ts'
import type { CopperGolem } from '../../../../net/minecraft/world/entity/animal/golem/CopperGolem.d.ts'
import type { IronGolem } from '../../../../net/minecraft/world/entity/animal/golem/IronGolem.d.ts'
import type { SnowGolem } from '../../../../net/minecraft/world/entity/animal/golem/SnowGolem.d.ts'
import type { HappyGhast } from '../../../../net/minecraft/world/entity/animal/happyghast/HappyGhast.d.ts'
import type { Nautilus } from '../../../../net/minecraft/world/entity/animal/nautilus/Nautilus.d.ts'
import type { ZombieNautilus } from '../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilus.d.ts'
import type { Panda } from '../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
import type { Parrot } from '../../../../net/minecraft/world/entity/animal/parrot/Parrot.d.ts'
import type { Pig } from '../../../../net/minecraft/world/entity/animal/pig/Pig.d.ts'
import type { PolarBear } from '../../../../net/minecraft/world/entity/animal/polarbear/PolarBear.d.ts'
import type { Rabbit } from '../../../../net/minecraft/world/entity/animal/rabbit/Rabbit.d.ts'
import type { Sheep } from '../../../../net/minecraft/world/entity/animal/sheep/Sheep.d.ts'
import type { Sniffer } from '../../../../net/minecraft/world/entity/animal/sniffer/Sniffer.d.ts'
import type { GlowSquid } from '../../../../net/minecraft/world/entity/animal/squid/GlowSquid.d.ts'
import type { Squid } from '../../../../net/minecraft/world/entity/animal/squid/Squid.d.ts'
import type { Turtle } from '../../../../net/minecraft/world/entity/animal/turtle/Turtle.d.ts'
import type { Wolf } from '../../../../net/minecraft/world/entity/animal/wolf/Wolf.d.ts'
import type { EndCrystal } from '../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
import type { EnderDragon } from '../../../../net/minecraft/world/entity/boss/enderdragon/EnderDragon.d.ts'
import type { WitherBoss } from '../../../../net/minecraft/world/entity/boss/wither/WitherBoss.d.ts'
import type { ArmorStand } from '../../../../net/minecraft/world/entity/decoration/ArmorStand.d.ts'
import type { GlowItemFrame } from '../../../../net/minecraft/world/entity/decoration/GlowItemFrame.d.ts'
import type { ItemFrame } from '../../../../net/minecraft/world/entity/decoration/ItemFrame.d.ts'
import type { LeashFenceKnotEntity } from '../../../../net/minecraft/world/entity/decoration/LeashFenceKnotEntity.d.ts'
import type { Mannequin } from '../../../../net/minecraft/world/entity/decoration/Mannequin.d.ts'
import type { Painting } from '../../../../net/minecraft/world/entity/decoration/painting/Painting.d.ts'
import type { FallingBlockEntity } from '../../../../net/minecraft/world/entity/item/FallingBlockEntity.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { PrimedTnt } from '../../../../net/minecraft/world/entity/item/PrimedTnt.d.ts'
import type { Blaze } from '../../../../net/minecraft/world/entity/monster/Blaze.d.ts'
import type { Creeper } from '../../../../net/minecraft/world/entity/monster/Creeper.d.ts'
import type { ElderGuardian } from '../../../../net/minecraft/world/entity/monster/ElderGuardian.d.ts'
import type { EnderMan } from '../../../../net/minecraft/world/entity/monster/EnderMan.d.ts'
import type { Endermite } from '../../../../net/minecraft/world/entity/monster/Endermite.d.ts'
import type { Ghast } from '../../../../net/minecraft/world/entity/monster/Ghast.d.ts'
import type { Giant } from '../../../../net/minecraft/world/entity/monster/Giant.d.ts'
import type { Guardian } from '../../../../net/minecraft/world/entity/monster/Guardian.d.ts'
import type { MagmaCube } from '../../../../net/minecraft/world/entity/monster/MagmaCube.d.ts'
import type { Phantom } from '../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
import type { Ravager } from '../../../../net/minecraft/world/entity/monster/Ravager.d.ts'
import type { Shulker } from '../../../../net/minecraft/world/entity/monster/Shulker.d.ts'
import type { Silverfish } from '../../../../net/minecraft/world/entity/monster/Silverfish.d.ts'
import type { Slime } from '../../../../net/minecraft/world/entity/monster/Slime.d.ts'
import type { Strider } from '../../../../net/minecraft/world/entity/monster/Strider.d.ts'
import type { Vex } from '../../../../net/minecraft/world/entity/monster/Vex.d.ts'
import type { Witch } from '../../../../net/minecraft/world/entity/monster/Witch.d.ts'
import type { Zoglin } from '../../../../net/minecraft/world/entity/monster/Zoglin.d.ts'
import type { Breeze } from '../../../../net/minecraft/world/entity/monster/breeze/Breeze.d.ts'
import type { Creaking } from '../../../../net/minecraft/world/entity/monster/creaking/Creaking.d.ts'
import type { Hoglin } from '../../../../net/minecraft/world/entity/monster/hoglin/Hoglin.d.ts'
import type { Evoker } from '../../../../net/minecraft/world/entity/monster/illager/Evoker.d.ts'
import type { Illusioner } from '../../../../net/minecraft/world/entity/monster/illager/Illusioner.d.ts'
import type { Pillager } from '../../../../net/minecraft/world/entity/monster/illager/Pillager.d.ts'
import type { Vindicator } from '../../../../net/minecraft/world/entity/monster/illager/Vindicator.d.ts'
import type { Piglin } from '../../../../net/minecraft/world/entity/monster/piglin/Piglin.d.ts'
import type { PiglinBrute } from '../../../../net/minecraft/world/entity/monster/piglin/PiglinBrute.d.ts'
import type { Bogged } from '../../../../net/minecraft/world/entity/monster/skeleton/Bogged.d.ts'
import type { Parched } from '../../../../net/minecraft/world/entity/monster/skeleton/Parched.d.ts'
import type { Skeleton } from '../../../../net/minecraft/world/entity/monster/skeleton/Skeleton.d.ts'
import type { Stray } from '../../../../net/minecraft/world/entity/monster/skeleton/Stray.d.ts'
import type { WitherSkeleton } from '../../../../net/minecraft/world/entity/monster/skeleton/WitherSkeleton.d.ts'
import type { CaveSpider } from '../../../../net/minecraft/world/entity/monster/spider/CaveSpider.d.ts'
import type { Spider } from '../../../../net/minecraft/world/entity/monster/spider/Spider.d.ts'
import type { Warden } from '../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
import type { Drowned } from '../../../../net/minecraft/world/entity/monster/zombie/Drowned.d.ts'
import type { Husk } from '../../../../net/minecraft/world/entity/monster/zombie/Husk.d.ts'
import type { Zombie } from '../../../../net/minecraft/world/entity/monster/zombie/Zombie.d.ts'
import type { ZombieVillager } from '../../../../net/minecraft/world/entity/monster/zombie/ZombieVillager.d.ts'
import type { ZombifiedPiglin } from '../../../../net/minecraft/world/entity/monster/zombie/ZombifiedPiglin.d.ts'
import type { Villager } from '../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
import type { WanderingTrader } from '../../../../net/minecraft/world/entity/npc/wanderingtrader/WanderingTrader.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { EvokerFangs } from '../../../../net/minecraft/world/entity/projectile/EvokerFangs.d.ts'
import type { EyeOfEnder } from '../../../../net/minecraft/world/entity/projectile/EyeOfEnder.d.ts'
import type { FireworkRocketEntity } from '../../../../net/minecraft/world/entity/projectile/FireworkRocketEntity.d.ts'
import type { FishingHook } from '../../../../net/minecraft/world/entity/projectile/FishingHook.d.ts'
import type { LlamaSpit } from '../../../../net/minecraft/world/entity/projectile/LlamaSpit.d.ts'
import type { ShulkerBullet } from '../../../../net/minecraft/world/entity/projectile/ShulkerBullet.d.ts'
import type { Arrow } from '../../../../net/minecraft/world/entity/projectile/arrow/Arrow.d.ts'
import type { SpectralArrow } from '../../../../net/minecraft/world/entity/projectile/arrow/SpectralArrow.d.ts'
import type { ThrownTrident } from '../../../../net/minecraft/world/entity/projectile/arrow/ThrownTrident.d.ts'
import type { DragonFireball } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/DragonFireball.d.ts'
import type { LargeFireball } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/LargeFireball.d.ts'
import type { SmallFireball } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/SmallFireball.d.ts'
import type { WitherSkull } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/WitherSkull.d.ts'
import type { BreezeWindCharge } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/windcharge/BreezeWindCharge.d.ts'
import type { WindCharge } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/windcharge/WindCharge.d.ts'
import type { Snowball } from '../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/Snowball.d.ts'
import type { ThrownEgg } from '../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/ThrownEgg.d.ts'
import type { ThrownEnderpearl } from '../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/ThrownEnderpearl.d.ts'
import type { ThrownExperienceBottle } from '../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/ThrownExperienceBottle.d.ts'
import type { ThrownLingeringPotion } from '../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/ThrownLingeringPotion.d.ts'
import type { ThrownSplashPotion } from '../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/ThrownSplashPotion.d.ts'
import type { Boat } from '../../../../net/minecraft/world/entity/vehicle/boat/Boat.d.ts'
import type { Raft } from '../../../../net/minecraft/world/entity/vehicle/boat/Raft.d.ts'
import type { Minecart } from '../../../../net/minecraft/world/entity/vehicle/minecart/Minecart.d.ts'
import type { MinecartCommandBlock } from '../../../../net/minecraft/world/entity/vehicle/minecart/MinecartCommandBlock.d.ts'
import type { MinecartFurnace } from '../../../../net/minecraft/world/entity/vehicle/minecart/MinecartFurnace.d.ts'
import type { MinecartSpawner } from '../../../../net/minecraft/world/entity/vehicle/minecart/MinecartSpawner.d.ts'
import type { MinecartTNT } from '../../../../net/minecraft/world/entity/vehicle/minecart/MinecartTNT.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TypedEntityData } from '../../../../net/minecraft/world/item/component/TypedEntityData.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { EntityTypeTest } from '../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class EntityType<T extends Entity> extends Object implements FabricEntityTypeImpl, FeatureElement, EntityTypeTest<Entity, T> {
    static ACACIA_BOAT: EntityType<Boat>;
    static ACACIA_CHEST_BOAT: EntityType<(Object | null)[]>;
    static ALLAY: EntityType<Allay>;
    static AREA_EFFECT_CLOUD: EntityType<AreaEffectCloud>;
    static ARMADILLO: EntityType<Armadillo>;
    static ARMOR_STAND: EntityType<ArmorStand>;
    static ARROW: EntityType<Arrow>;
    static AXOLOTL: EntityType<Axolotl>;
    static BAMBOO_CHEST_RAFT: EntityType<(Object | null)[]>;
    static BAMBOO_RAFT: EntityType<Raft>;
    static BAT: EntityType<Bat>;
    static BEE: EntityType<Bee>;
    static BIRCH_BOAT: EntityType<Boat>;
    static BIRCH_CHEST_BOAT: EntityType<(Object | null)[]>;
    static BLAZE: EntityType<Blaze>;
    static BLOCK_DISPLAY: EntityType<Display$BlockDisplay>;
    static BOGGED: EntityType<Bogged>;
    static BREEZE: EntityType<Breeze>;
    static BREEZE_WIND_CHARGE: EntityType<BreezeWindCharge>;
    static CAMEL: EntityType<Camel>;
    static CAMEL_HUSK: EntityType<CamelHusk>;
    static CAT: EntityType<Cat>;
    static CAVE_SPIDER: EntityType<CaveSpider>;
    static CHERRY_BOAT: EntityType<Boat>;
    static CHERRY_CHEST_BOAT: EntityType<(Object | null)[]>;
    static CHEST_MINECART: EntityType<(Object | null)[]>;
    static CHICKEN: EntityType<Chicken>;
    static COD: EntityType<Cod>;
    static CODEC: Codec<Object>;
    static COMMAND_BLOCK_MINECART: EntityType<MinecartCommandBlock>;
    static COPPER_GOLEM: EntityType<CopperGolem>;
    static COW: EntityType<Cow>;
    static CREAKING: EntityType<Creaking>;
    static CREEPER: EntityType<Creeper>;
    static DARK_OAK_BOAT: EntityType<Boat>;
    static DARK_OAK_CHEST_BOAT: EntityType<(Object | null)[]>;
    static DOLPHIN: EntityType<Dolphin>;
    static DONKEY: EntityType<Donkey>;
    static DRAGON_FIREBALL: EntityType<DragonFireball>;
    static DROWNED: EntityType<Drowned>;
    static EGG: EntityType<ThrownEgg>;
    static ELDER_GUARDIAN: EntityType<ElderGuardian>;
    static ENDERMAN: EntityType<EnderMan>;
    static ENDERMITE: EntityType<Endermite>;
    static ENDER_DRAGON: EntityType<EnderDragon>;
    static ENDER_PEARL: EntityType<ThrownEnderpearl>;
    static END_CRYSTAL: EntityType<EndCrystal>;
    static EVOKER: EntityType<Evoker>;
    static EVOKER_FANGS: EntityType<EvokerFangs>;
    static EXPERIENCE_BOTTLE: EntityType<ThrownExperienceBottle>;
    static EXPERIENCE_ORB: EntityType<ExperienceOrb>;
    static EYE_OF_ENDER: EntityType<EyeOfEnder>;
    static FALLING_BLOCK: EntityType<FallingBlockEntity>;
    static FILTERED_REGISTRIES: (Object | null)[];
    static FIREBALL: EntityType<LargeFireball>;
    static FIREWORK_ROCKET: EntityType<FireworkRocketEntity>;
    static FISHING_BOBBER: EntityType<FishingHook>;
    static FOX: EntityType<Fox>;
    static FROG: EntityType<Frog>;
    static FURNACE_MINECART: EntityType<MinecartFurnace>;
    static GHAST: EntityType<Ghast>;
    static GIANT: EntityType<Giant>;
    static GLOW_ITEM_FRAME: EntityType<GlowItemFrame>;
    static GLOW_SQUID: EntityType<GlowSquid>;
    static GOAT: EntityType<Goat>;
    static GUARDIAN: EntityType<Guardian>;
    static HAPPY_GHAST: EntityType<HappyGhast>;
    static HOGLIN: EntityType<Hoglin>;
    static HOPPER_MINECART: EntityType<(Object | null)[]>;
    static HORSE: EntityType<Horse>;
    static HUSK: EntityType<Husk>;
    static ILLUSIONER: EntityType<Illusioner>;
    static INTERACTION: EntityType<Interaction>;
    static IRON_GOLEM: EntityType<IronGolem>;
    static ITEM: EntityType<ItemEntity>;
    static ITEM_DISPLAY: EntityType<Display$ItemDisplay>;
    static ITEM_FRAME: EntityType<ItemFrame>;
    static JUNGLE_BOAT: EntityType<Boat>;
    static JUNGLE_CHEST_BOAT: EntityType<(Object | null)[]>;
    static LEASH_KNOT: EntityType<LeashFenceKnotEntity>;
    static LIGHTNING_BOLT: EntityType<LightningBolt>;
    static LINGERING_POTION: EntityType<ThrownLingeringPotion>;
    static LLAMA: EntityType<Llama>;
    static LLAMA_SPIT: EntityType<LlamaSpit>;
    static MAGMA_CUBE: EntityType<MagmaCube>;
    static MANGROVE_BOAT: EntityType<Boat>;
    static MANGROVE_CHEST_BOAT: EntityType<(Object | null)[]>;
    static MANNEQUIN: EntityType<Mannequin>;
    static MARKER: EntityType<Marker>;
    static MINECART: EntityType<Minecart>;
    static MOOSHROOM: EntityType<MushroomCow>;
    static MULE: EntityType<Mule>;
    static NAUTILUS: EntityType<Nautilus>;
    static OAK_BOAT: EntityType<Boat>;
    static OAK_CHEST_BOAT: EntityType<(Object | null)[]>;
    static OCELOT: EntityType<Ocelot>;
    static OMINOUS_ITEM_SPAWNER: EntityType<OminousItemSpawner>;
    static PAINTING: EntityType<Painting>;
    static PALE_OAK_BOAT: EntityType<Boat>;
    static PALE_OAK_CHEST_BOAT: EntityType<(Object | null)[]>;
    static PANDA: EntityType<Panda>;
    static PARCHED: EntityType<Parched>;
    static PARROT: EntityType<Parrot>;
    static PHANTOM: EntityType<Phantom>;
    static PIG: EntityType<Pig>;
    static PIGLIN: EntityType<Piglin>;
    static PIGLIN_BRUTE: EntityType<PiglinBrute>;
    static PILLAGER: EntityType<Pillager>;
    static PLAYER: EntityType<Player>;
    static POLAR_BEAR: EntityType<PolarBear>;
    static PUFFERFISH: EntityType<Pufferfish>;
    static RABBIT: EntityType<Rabbit>;
    static RAVAGER: EntityType<Ravager>;
    static SALMON: EntityType<Salmon>;
    static SHEEP: EntityType<Sheep>;
    static SHULKER: EntityType<Shulker>;
    static SHULKER_BULLET: EntityType<ShulkerBullet>;
    static SILVERFISH: EntityType<Silverfish>;
    static SKELETON: EntityType<Skeleton>;
    static SKELETON_HORSE: EntityType<SkeletonHorse>;
    static SLIME: EntityType<Slime>;
    static SMALL_FIREBALL: EntityType<SmallFireball>;
    static SNIFFER: EntityType<Sniffer>;
    static SNOWBALL: EntityType<Snowball>;
    static SNOW_GOLEM: EntityType<SnowGolem>;
    static SPAWNER_MINECART: EntityType<MinecartSpawner>;
    static SPECTRAL_ARROW: EntityType<SpectralArrow>;
    static SPIDER: EntityType<Spider>;
    static SPLASH_POTION: EntityType<ThrownSplashPotion>;
    static SPRUCE_BOAT: EntityType<Boat>;
    static SPRUCE_CHEST_BOAT: EntityType<(Object | null)[]>;
    static SQUID: EntityType<Squid>;
    static STRAY: EntityType<Stray>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STRIDER: EntityType<Strider>;
    static TADPOLE: EntityType<Tadpole>;
    static TEXT_DISPLAY: EntityType<Display$TextDisplay>;
    static TNT: EntityType<PrimedTnt>;
    static TNT_MINECART: EntityType<MinecartTNT>;
    static TRADER_LLAMA: EntityType<TraderLlama>;
    static TRIDENT: EntityType<ThrownTrident>;
    static TROPICAL_FISH: EntityType<TropicalFish>;
    static TURTLE: EntityType<Turtle>;
    static VEX: EntityType<Vex>;
    static VILLAGER: EntityType<Villager>;
    static VINDICATOR: EntityType<Vindicator>;
    static WANDERING_TRADER: EntityType<WanderingTrader>;
    static WARDEN: EntityType<Warden>;
    static WIND_CHARGE: EntityType<WindCharge>;
    static WITCH: EntityType<Witch>;
    static WITHER: EntityType<WitherBoss>;
    static WITHER_SKELETON: EntityType<WitherSkeleton>;
    static WITHER_SKULL: EntityType<WitherSkull>;
    static WOLF: EntityType<Wolf>;
    static ZOGLIN: EntityType<Zoglin>;
    static ZOMBIE: EntityType<Zombie>;
    static ZOMBIE_HORSE: EntityType<ZombieHorse>;
    static ZOMBIE_NAUTILUS: EntityType<ZombieNautilus>;
    static ZOMBIE_VILLAGER: EntityType<ZombieVillager>;
    static ZOMBIFIED_PIGLIN: EntityType<ZombifiedPiglin>;
    static appendComponentsConfig(paraminitialConfig: (param0: Object | null) => void, paramitemStack: ItemStack): (param0: Object | null) => void;
    static appendCustomEntityStackConfig(paraminitialConfig: (param0: Object | null) => void, paramlevel: Level, paramitemStack: ItemStack, paramuser: LivingEntity): (param0: Object | null) => void;
    static appendDefaultStackConfig(paraminitialConfig: (param0: Object | null) => void, paramlevel: Level, paramitemStack: ItemStack, paramuser: LivingEntity): (param0: Object | null) => void;
    static by(paraminput: ValueInput): Optional<Object>;
    static byString(paramid: string): Optional<Object>;
    static create(paramtype: EntityType<Object>, paraminput: ValueInput, paramlevel: Level, paramreason: EntitySpawnReason): Optional<Entity>;
    static create(paraminput: ValueInput, paramlevel: Level, paramreason: EntitySpawnReason): Optional<Entity>;
    static createDefaultStackConfig(paramlevel: Level, paramitemStack: ItemStack, paramuser: LivingEntity): (param0: Object | null) => void;
    static forClass(paramcls: Class<Object>): EntityTypeTest<Object, Object>;
    static forExactClass(paramcls: Class<Object>): EntityTypeTest<Object, Object>;
    static getKey(paramtype: EntityType<Object>): Identifier;
    static loadEntitiesRecursive(paramentities: ValueInput[], paramlevel: Level, paramreason: EntitySpawnReason): Stream<Entity>;
    static loadEntityRecursive(paramtag: CompoundTag, paramlevel: Level, paramreason: EntitySpawnReason, parampostLoad: (param0: Entity) => net.minecraft.world.entity.Entity): Entity;
    static loadEntityRecursive(paramtype: EntityType<Object>, paramtag: CompoundTag, paramlevel: Level, paramreason: EntitySpawnReason, parampostLoad: (param0: Entity) => net.minecraft.world.entity.Entity): Entity;
    static loadEntityRecursive(paramtype: EntityType<Object>, paraminput: ValueInput, paramlevel: Level, paramreason: EntitySpawnReason, parampostLoad: (param0: Entity) => net.minecraft.world.entity.Entity): Entity;
    static loadEntityRecursive(paraminput: ValueInput, paramlevel: Level, paramreason: EntitySpawnReason, parampostLoad: (param0: Entity) => net.minecraft.world.entity.Entity): Entity;
    static updateCustomEntityTag(paramlevel: Level, paramuser: LivingEntity, paramentity: Entity, paramentityData: TypedEntityData<Object>): void;
    constructor(factory: (param0: T, param1: EntityType<Object>) => unknown, category: MobCategory, serialize: boolean, summon: boolean, fireImmune: boolean, canSpawnFarFromPlayer: boolean, immuneTo: Block[], dimensions: EntityDimensions, spawnDimensionsScale: number, clientTrackingRange: number, updateInterval: number, descriptionId: string, lootTable: Optional<ResourceKey<LootTable>>, requiredFeatures: FeatureFlagSet, allowedInPeaceful: boolean)
    readonly allowedInPeaceful: boolean;
    // private alwaysUpdateVelocity: boolean;
    // private builtInRegistryHolder: Holder$Reference<EntityType<Object>>;
    // private canPotentiallyExecuteCommands: boolean;
    // private canSpawnFarFromPlayer: boolean;
    readonly category: MobCategory;
    // private clientTrackingRange: number;
    readonly description: Component;
    readonly descriptionId: string;
    dimensions: EntityDimensions;
    // private factory: (param0: T, param1: EntityType<Object>) => unknown;
    // private fireImmune: boolean;
    // private immuneTo: Block[];
    // private lootTable: Optional<ResourceKey<LootTable>>;
    // private requiredFeatures: FeatureFlagSet;
    // private serialize: boolean;
    // private spawnDimensionsScale: number;
    // private summon: boolean;
    // private updateInterval: number;
    builtInRegistryHolder(): Holder$Reference<EntityType<Object>>;
    canSerialize(): boolean;
    canSpawnFarFromPlayer(): boolean;
    canSummon(): boolean;
    clientTrackingRange(): number;
    create(level: ServerLevel, postSpawnConfig: (param0: T) => void, spawnPos: BlockPos, spawnReason: EntitySpawnReason, tryMoveDown: boolean, movedUp: boolean): T;
    create(level: Level, reason: EntitySpawnReason): T;
    fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
    fabric_setCanPotentiallyExecuteCommands(arg0: boolean): void;
    fireImmune(): boolean;
    getBaseClass(): Class<Entity>;
    getCategory(): MobCategory;
    getDefaultLootTable(): Optional<ResourceKey<LootTable>>;
    getDescription(): Component;
    getDescriptionId(): string;
    getDimensions(): EntityDimensions;
    getHeight(): number;
    getSpawnAABB(x: number, y: number, z: number): AABB;
    getWidth(): number;
    isAllowedInPeaceful(): boolean;
    isBlockDangerous(state: BlockState): boolean;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    onlyOpCanSetNbt(): boolean;
    requiredFeatures(): FeatureFlagSet;
    spawn(level: ServerLevel, postSpawnConfig: (param0: T) => void, spawnPos: BlockPos, spawnReason: EntitySpawnReason, tryMoveDown: boolean, movedUp: boolean): T;
    spawn(level: ServerLevel, spawnPos: BlockPos, spawnReason: EntitySpawnReason): T;
    spawn(level: ServerLevel, itemStack: ItemStack, user: LivingEntity, spawnPos: BlockPos, spawnReason: EntitySpawnReason, tryMoveDown: boolean, movedUp: boolean): T;
    toShortString(): string;
    toString(): string;
    trackDeltas(): boolean;
    tryCast(entity: Entity): T;
    updateInterval(): number;
}