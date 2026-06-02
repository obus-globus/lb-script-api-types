import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemTintSource } from '../../../../../net/minecraft/client/color/item/ItemTintSource.d.ts'
import type { BlockModelGenerators$BlockFamilyProvider } from '../../../../../net/minecraft/client/data/models/BlockModelGenerators$BlockFamilyProvider.d.ts'
import type { BlockModelGenerators$PlantType } from '../../../../../net/minecraft/client/data/models/BlockModelGenerators$PlantType.d.ts'
import type { BlockModelGenerators$WoodProvider } from '../../../../../net/minecraft/client/data/models/BlockModelGenerators$WoodProvider.d.ts'
import type { ItemModelOutput } from '../../../../../net/minecraft/client/data/models/ItemModelOutput.d.ts'
import type { MultiVariant } from '../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { BlockModelDefinitionGenerator } from '../../../../../net/minecraft/client/data/models/blockstates/BlockModelDefinitionGenerator.d.ts'
import type { ConditionBuilder } from '../../../../../net/minecraft/client/data/models/blockstates/ConditionBuilder.d.ts'
import type { MultiPartGenerator } from '../../../../../net/minecraft/client/data/models/blockstates/MultiPartGenerator.d.ts'
import type { MultiVariantGenerator } from '../../../../../net/minecraft/client/data/models/blockstates/MultiVariantGenerator.d.ts'
import type { PropertyDispatch } from '../../../../../net/minecraft/client/data/models/blockstates/PropertyDispatch.d.ts'
import type { ModelInstance } from '../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { ModelTemplate } from '../../../../../net/minecraft/client/data/models/model/ModelTemplate.d.ts'
import type { TextureMapping } from '../../../../../net/minecraft/client/data/models/model/TextureMapping.d.ts'
import type { TexturedModel$Provider } from '../../../../../net/minecraft/client/data/models/model/TexturedModel$Provider.d.ts'
import type { MultiblockChestResources } from '../../../../../net/minecraft/client/renderer/MultiblockChestResources.d.ts'
import type { Variant } from '../../../../../net/minecraft/client/renderer/block/dispatch/Variant.d.ts'
import type { VariantMutator } from '../../../../../net/minecraft/client/renderer/block/dispatch/VariantMutator.d.ts'
import type { Condition } from '../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Condition.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { Material } from '../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { FrontAndTop } from '../../../../../net/minecraft/core/FrontAndTop.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { SkullBlock$Type } from '../../../../../net/minecraft/world/level/block/SkullBlock$Type.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
import type { StateDefinition } from '../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateHolder } from '../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { DripstoneThickness } from '../../../../../net/minecraft/world/level/block/state/properties/DripstoneThickness.d.ts'
import type { EnumProperty } from '../../../../../net/minecraft/world/level/block/state/properties/EnumProperty.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { SideChainPart } from '../../../../../net/minecraft/world/level/block/state/properties/SideChainPart.d.ts'
export class BlockModelGenerators extends Object {
    static NOP: (param0: Object | null) => unknown;
    static UV_LOCK: (param0: Object | null) => unknown;
    static X_ROT_180: (param0: Object | null) => unknown;
    static X_ROT_270: (param0: Object | null) => unknown;
    static X_ROT_90: (param0: Object | null) => unknown;
    static Y_ROT_180: (param0: Object | null) => unknown;
    static Y_ROT_270: (param0: Object | null) => unknown;
    static Y_ROT_90: (param0: Object | null) => unknown;
    static and(paramterms: (Object | null)[]): (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>;
    static applyRotation(paramorientation: FrontAndTop): (param0: Object | null) => unknown;
    static condition(paramproperty: EnumProperty<Object>, paramterm: Object | null, paramadditionalTerms: Object | null): ConditionBuilder;
    static condition(): ConditionBuilder;
    static condition(paramproperty: BooleanProperty, paramterm: boolean): ConditionBuilder;
    static createAxisAlignedPillarBlock(paramblock: Block, parammodel: MultiVariant): BlockModelDefinitionGenerator;
    static createBambooModels(paramage: number): MultiVariant;
    static createBooleanModelDispatch(paramproperty: BooleanProperty, paramonTrue: MultiVariant, paramonFalse: MultiVariant): PropertyDispatch<MultiVariant>;
    static createButton(paramblock: Block, paramnormal: MultiVariant, parampressed: MultiVariant): BlockModelDefinitionGenerator;
    static createCopperBulb(paramcopperBulb: Block, parambaseModel: MultiVariant, paramlitModel: MultiVariant, parambaseModelPowered: MultiVariant, paramlitModelPowered: MultiVariant): BlockModelDefinitionGenerator;
    static createCustomFence(paramblock: Block, parampost: MultiVariant, paramnorth: MultiVariant, parameast: MultiVariant, paramsouth: MultiVariant, paramwest: MultiVariant): BlockModelDefinitionGenerator;
    static createDoor(paramblock: Block, parambottomLeft: MultiVariant, parambottomLeftOpen: MultiVariant, parambottomRight: MultiVariant, parambottomRightOpen: MultiVariant, paramtopLeft: MultiVariant, paramtopLeftOpen: MultiVariant, paramtopRight: MultiVariant, paramtopRightOpen: MultiVariant): BlockModelDefinitionGenerator;
    static createEmptyOrFullDispatch(paramproperty: Property<Object>, paramthreshold: Object | null, paramfullModel: MultiVariant, paramemptyModel: MultiVariant): PropertyDispatch<MultiVariant>;
    static createFence(paramblock: Block, parampost: MultiVariant, paramside: MultiVariant): BlockModelDefinitionGenerator;
    static createFenceGate(paramblock: Block, paramopen: MultiVariant, paramclosed: MultiVariant, paramopenWall: MultiVariant, paramclosedWall: MultiVariant, paramuvLock: boolean): BlockModelDefinitionGenerator;
    static createMirroredColumnGenerator(paramblock: Block, paramnormal: Variant, parammapping: TextureMapping, parammodelOutput: (param0: Identifier, param1: ModelInstance) => void): BlockModelDefinitionGenerator;
    static createMirroredCubeGenerator(paramblock: Block, paramnormal: Variant, parammapping: TextureMapping, parammodelOutput: (param0: Identifier, param1: ModelInstance) => void): BlockModelDefinitionGenerator;
    static createNorthWestMirroredCubeGenerator(paramblock: Block, paramnormal: Variant, parammapping: TextureMapping, parammodelOutput: (param0: Identifier, param1: ModelInstance) => void): BlockModelDefinitionGenerator;
    static createOrientableTrapdoor(paramblock: Block, paramtop: MultiVariant, parambottom: MultiVariant, paramopen: MultiVariant): BlockModelDefinitionGenerator;
    static createPillarBlockUVLocked(paramblock: Block, parammapping: TextureMapping, parammodelOutput: (param0: Identifier, param1: ModelInstance) => void): BlockModelDefinitionGenerator;
    static createPressurePlate(paramblock: Block, paramoff: MultiVariant, paramon: MultiVariant): BlockModelDefinitionGenerator;
    static createRotatedPillar(): PropertyDispatch<(param0: Object | null) => unknown>;
    static createRotatedPillarWithHorizontalVariant(paramblock: Block, parammodel: MultiVariant, paramhorizontalModel: MultiVariant): BlockModelDefinitionGenerator;
    static createRotatedVariants(parambase: Variant): MultiVariant;
    static createRotatedVariants(paramnormal: Variant, parammirrored: Variant): MultiVariant;
    static createSimpleBlock(paramblock: Block, paramvariant: MultiVariant): MultiVariantGenerator;
    static createSlab(paramblock: Block, parambottom: MultiVariant, paramtop: MultiVariant, paramfull: MultiVariant): BlockModelDefinitionGenerator;
    static createStairs(paramblock: Block, paraminner: MultiVariant, paramstraight: MultiVariant, paramouter: MultiVariant): BlockModelDefinitionGenerator;
    static createTrapdoor(paramblock: Block, paramtop: MultiVariant, parambottom: MultiVariant, paramopen: MultiVariant): BlockModelDefinitionGenerator;
    static createWall(paramblock: Block, parampost: MultiVariant, paramlowSide: MultiVariant, paramtallSide: MultiVariant): BlockModelDefinitionGenerator;
    static forEachHorizontalDirection(paramconsumer: (param0: Direction, param1: (param0: Object | null) => unknown) => void): void;
    static or(paramterms: (Object | null)[]): (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>;
    static plainModel(parammodel: Identifier): Variant;
    static plainVariant(parammodel: Identifier): MultiVariant;
    static selectMultifaceProperties(paramholder: StateHolder<Object, Object>, paramconverter: (param0: Direction) => Object | null): Map<Object | null, (param0: Object | null) => unknown>;
    static shelfCondition(paramdirection: Direction, paramisPowered: boolean, paramsideChainPart: SideChainPart): (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>;
    static variant(paramvariant: Variant): MultiVariant;
    static variants(paramvariant: (Object | null)[]): MultiVariant;
    constructor(blockStateOutput: (param0: BlockModelDefinitionGenerator) => void, itemModelOutput: ItemModelOutput, modelOutput: (param0: Identifier, param1: ModelInstance) => void)
    blockStateOutput: (param0: BlockModelDefinitionGenerator) => void;
    itemModelOutput: ItemModelOutput;
    modelOutput: (param0: Identifier, param1: ModelInstance) => void;
    addBookSlotModel(multiPartGenerator: MultiPartGenerator, facingCondition: (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>, mutator: (param0: Object | null) => unknown, stateProperty: BooleanProperty, template: ModelTemplate, isSlotOccupied: boolean): void;
    addShelfPart(block: Block, mapping: TextureMapping, generator: MultiPartGenerator, template: ModelTemplate, isPowered: boolean, sideChainPart: SideChainPart): void;
    addSlotStateAndRotationVariants(multiPartGenerator: MultiPartGenerator, facingCondition: (param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>, mutator: (param0: Object | null) => unknown): void;
    copyCopperBulbModel(donor: Block, acceptor: Block): void;
    copyDoorModel(donor: Block, acceptor: Block): void;
    copyModel(donor: Block, acceptor: Block): void;
    copyTrapdoorModel(donor: Block, acceptor: Block): void;
    createActiveRail(block: Block): void;
    createAirLikeBlock(block: Block, particle: Material): void;
    createAirLikeBlock(block: Block, particleItem: Item): void;
    createAmethystCluster(clusterBlock: Block): void;
    // private createAmethystClusters(): void;
    createAnvil(block: Block): void;
    createAxisAlignedPillarBlock(block: Block, modelProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel): void;
    createAxisAlignedPillarBlockCustomModel(block: Block, model: MultiVariant): void;
    createAzalea(block: Block): void;
    // private createBamboo(): void;
    createBanner(standAlone: Block, wall: Block, baseColor: DyeColor): void;
    // private createBanners(): void;
    // private createBarrel(): void;
    createBars(block: Block, postEndResource: Identifier, postResource: Identifier, capResource: Identifier, capAltResource: Identifier, sideResource: Identifier, sideAltResource: Identifier): void;
    createBarsAndItem(block: Block): void;
    createBarsAndItem(unwaxed: Block, waxed: Block): void;
    createBed(bed: Block, itemParticle: Block, dyeColor: DyeColor): void;
    // private createBeds(): void;
    createBeeNest(block: Block, mappingFunction: (param0: Block) => TextureMapping): void;
    // private createBell(): void;
    // private createBigDripLeafBlock(): void;
    // private createBookshelf(): void;
    // private createBrewingStand(): void;
    createBrushableBlock(block: Block): void;
    // private createCakeBlock(): void;
    // private createCalibratedSculkSensor(): void;
    createCampfires(campFires: Block[]): void;
    createCandleAndCandleCake(candleBlock: Block, candleCakeBlock: Block): void;
    // private createCartographyTable(): void;
    // private createCauldrons(): void;
    // private createCaveVines(): void;
    createChest(block: Block, particle: Block, textures: MultiblockChestResources<Identifier>, hasGiftVariant: boolean): void;
    createChest(block: Block, particle: Block, texture: Identifier, hasGiftVariant: boolean): void;
    // private createChests(): void;
    // private createChiseledBookshelf(): void;
    // private createChorusFlower(): void;
    // private createChorusPlant(): void;
    // private createCocoa(): void;
    createColoredBlockWithRandomRotations(modelProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel, blocks: Block[]): void;
    createColoredBlockWithStateRotations(modelProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel, blocks: Block[]): void;
    createCommandBlock(block: Block): void;
    // private createComparator(): void;
    // private createComposter(): void;
    createCopperBulb(copperBulb: Block): void;
    createCopperChain(unwaxed: Block, waxed: Block): void;
    createCopperChainItem(unwaxed: Item, waxed: Item): void;
    // private createCopperChests(): void;
    createCopperGolemStatue(block: Block, particle: Block, state: WeatheringCopper$WeatherState): void;
    // private createCopperGolemStatues(): void;
    createCopperLantern(unwaxed: Block, waxed: Block): void;
    createCoral(plant: Block, deadPlant: Block, block: Block, deadBlock: Block, fan: Block, deadFan: Block, wallFan: Block, deadWallFan: Block): void;
    createCoralFans(fan: Block, wallFan: Block): void;
    // private createCrafterBlock(): void;
    createCraftingTableLike(block: Block, bottomBlock: Block, mappingProvider: (param0: Block, param1: Block) => TextureMapping): void;
    createCreakingHeart(block: Block): void;
    createCreakingHeartModel(provider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel, block: Block, suffix: string): Identifier;
    createCropBlock(block: Block, property: Property<number>, stages: number[]): void;
    createCrossBlock(block: Block, plantType: BlockModelGenerators$PlantType): void;
    createCrossBlock(block: Block, plantType: BlockModelGenerators$PlantType, textures: TextureMapping): void;
    createCrossBlock(block: Block, plantType: BlockModelGenerators$PlantType, property: Property<number>, stages: number[]): void;
    createCrossBlockWithDefaultItem(block: Block, plantType: BlockModelGenerators$PlantType): void;
    createCrossBlockWithDefaultItem(block: Block, plantType: BlockModelGenerators$PlantType, textures: TextureMapping): void;
    // private createDaylightDetector(): void;
    // private createDirtPath(): void;
    createDispenserBlock(block: Block): void;
    createDoor(door: Block): void;
    createDoubleBlock(block: Block, topModel: MultiVariant, bottomModel: MultiVariant): void;
    createDoublePlant(block: Block, plantType: BlockModelGenerators$PlantType): void;
    createDoublePlantWithDefaultItem(block: Block, plantType: BlockModelGenerators$PlantType): void;
    // private createDriedGhastBlock(): void;
    // private createEndPortalFrame(): void;
    // private createFarmland(): void;
    // private createFire(): void;
    createFlatItemModel(item: Item): Identifier;
    createFlatItemModelWithBlockTexture(item: Item, block: Block): Identifier;
    createFlatItemModelWithBlockTexture(item: Item, block: Block, suffix: string): Identifier;
    createFlatItemModelWithBlockTextureAndOverlay(item: Item, block: Block, overlaySuffix: string): Identifier;
    createFloorFireModels(block: Block): MultiVariant;
    createFlowerBed(flowerbed: Block): void;
    // private createFrogspawnBlock(): void;
    // private createFrostedIce(): void;
    createFullAndCarpetBlocks(block: Block, carpet: Block): void;
    createFurnace(furnace: Block, provider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel): void;
    createGlassBlocks(block: Block, pane: Block): void;
    // private createGrassBlocks(): void;
    createGrassLikeBlock(block: Block, normal: MultiVariant, snowy: MultiVariant): void;
    // private createGrindstone(): void;
    createGrowingPlant(kelp: Block, kelpPlant: Block, type: BlockModelGenerators$PlantType): void;
    createHangingMoss(block: Block): void;
    createHangingSign(particleBlock: Block, hangingSign: Block, wallHangingSign: Block): void;
    createHead(standAlone: Block, wall: Block, skullType: SkullBlock$Type, itemBase: Identifier): void;
    // private createHeads(): void;
    // private createHopper(): void;
    createHorizontallyRotatedBlock(block: Block, modelProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel): void;
    // private createInfestedDeepslate(): void;
    // private createInfestedStone(): void;
    createItemWithGrassTint(block: Block): void;
    // private createJigsaw(): void;
    createLantern(block: Block): void;
    createLeafLitter(block: Block): void;
    // private createLever(): void;
    // private createLightBlock(): void;
    createLightningRod(block: Block, waxedBlock: Block): void;
    // private createLilyPad(): void;
    // private createMagmaBlock(): void;
    // private createMangrovePropagule(): void;
    createMossyCarpet(block: Block): void;
    // private createMuddyMangroveRoots(): void;
    createMultiface(block: Block): void;
    createMultiface(block: Block, item: Item): void;
    createMultifaceBlockStates(block: Block): void;
    createMushroomBlock(block: Block): void;
    // private createNetherPortalBlock(): void;
    createNetherRoots(roots: Block, pottedRoots: Block): void;
    // private createNetherrack(): void;
    createNonTemplateHorizontalBlock(block: Block): void;
    createNonTemplateModelBlock(block: Block): void;
    createNonTemplateModelBlock(block: Block, donor: Block): void;
    createNormalTorch(ground: Block, wall: Block): void;
    createNyliumBlock(block: Block): void;
    // private createObserver(): void;
    createOrientableTrapdoor(trapdoor: Block): void;
    createParticleOnlyBlock(block: Block): void;
    createParticleOnlyBlock(block: Block, particleDonor: Block): void;
    createParticleOnlyBlockModel(block: Block, particleDonor: Block): MultiVariant;
    createPassiveRail(block: Block): void;
    // private createPetrifiedOakSlab(): void;
    // private createPistonHeads(): void;
    createPistonVariant(block: Block, extended: MultiVariant, textures: TextureMapping): void;
    // private createPistons(): void;
    // private createPitcherCrop(): void;
    // private createPitcherPlant(): void;
    createPlant(standAlone: Block, potted: Block, plantType: BlockModelGenerators$PlantType): void;
    createPlantWithDefaultItem(standAlone: Block, potted: Block, plantType: BlockModelGenerators$PlantType): void;
    // private createPointedDripstone(): void;
    createPointedDripstoneVariant(direction: Direction, dripstoneThickness: DripstoneThickness): MultiVariant;
    createPottedAzalea(block: Block): void;
    createPumpkinVariant(block: Block, textures: TextureMapping): void;
    // private createPumpkins(): void;
    // private createRedstoneLamp(): void;
    // private createRedstoneTorch(): void;
    // private createRedstoneWire(): void;
    // private createRepeater(): void;
    // private createRespawnAnchor(): void;
    createRotatableColumn(block: Block): void;
    createRotatedMirroredVariantBlock(block: Block): void;
    createRotatedPillarWithHorizontalVariant(block: Block, verticalProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel, horizontalProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel): void;
    createRotatedVariantBlock(block: Block): void;
    // private createScaffolding(): void;
    // private createSculkCatalyst(): void;
    // private createSculkSensor(): void;
    // private createSculkShrieker(): void;
    // private createSeaPickle(): void;
    createSegmentedBlock(segmentedProperty: Block, model1: MultiVariant, model1SegmentCondition: (param0: ConditionBuilder) => ConditionBuilder, model2: MultiVariant, model2SegmentCondition: (param0: ConditionBuilder) => ConditionBuilder, model3: MultiVariant, model3SegmentCondition: (param0: ConditionBuilder) => ConditionBuilder, model4: MultiVariant, model4SegmentCondition: (param0: ConditionBuilder) => ConditionBuilder): void;
    createShelf(block: Block, particle: Block): void;
    createShulkerBox(block: Block, color: DyeColor): void;
    createSideFireModels(block: Block): MultiVariant;
    // private createSmallDripleaf(): void;
    // private createSmithingTable(): void;
    // private createSmoothStoneSlab(): void;
    // private createSnifferEgg(): void;
    // private createSnowBlocks(): void;
    // private createSoulFire(): void;
    createStems(growingStem: Block, attachedStem: Block): void;
    // private createStonecutter(): void;
    // private createStructureBlock(): void;
    createSuffixedVariant(block: Block, suffix: string, template: ModelTemplate, textureMapping: (param0: Material) => TextureMapping): Identifier;
    // private createSunflower(): void;
    // private createSweetBerryBush(): void;
    // private createTallSeagrass(): void;
    // private createTestBlock(): void;
    createTintedDoublePlant(block: Block): void;
    createTintedLeaves(block: Block, modelProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel, tintColor: number): void;
    createTopFireModels(block: Block): MultiVariant;
    createTrapdoor(trapdoor: Block): void;
    // private createTrialSpawner(): void;
    // private createTripwire(): void;
    // private createTripwireHook(): void;
    createTrivialBlock(block: Block, modelProvider: (param0: Block) => net.minecraft.client.data.models.model.TexturedModel): void;
    createTrivialCube(block: Block): void;
    // private createTurtleEgg(): void;
    createTurtleEggModel(eggs: number, hatch: number): Variant;
    createTurtleEggModel(count: number, hatchProgress: string, texture: TextureMapping): Variant;
    // private createVault(): void;
    // private createVine(): void;
    createWeightedPressurePlate(block: Block, appearance: Block): void;
    family(block: Block): BlockModelGenerators$BlockFamilyProvider;
    generateSimpleSpecialItemModel(block: Block, transformation: Optional<Transformation>, specialModel: SpecialModelRenderer$Unbaked<Object>): void;
    registerSimpleFlatItemModel(item: Item): void;
    registerSimpleFlatItemModel(block: Block): void;
    registerSimpleFlatItemModel(block: Block, suffix: string): void;
    registerSimpleItemModel(item: Item, model: Identifier): void;
    registerSimpleItemModel(block: Block, model: Identifier): void;
    registerSimpleTintedItemModel(block: Block, model: Identifier, tint: ItemTintSource): void;
    registerTwoLayerFlatItemModel(block: Block, overlaySuffix: string): void;
    run(): void;
    woodProvider(log: Block): BlockModelGenerators$WoodProvider;
}