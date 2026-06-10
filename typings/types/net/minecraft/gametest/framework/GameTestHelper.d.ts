import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntPredicate } from '../../../../java/util/function/IntPredicate.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { GameTestAssertException } from '../../../../net/minecraft/gametest/framework/GameTestAssertException.d.ts'
import type { GameTestAssertPosException } from '../../../../net/minecraft/gametest/framework/GameTestAssertPosException.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestSequence } from '../../../../net/minecraft/gametest/framework/GameTestSequence.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { InventoryCarrier } from '../../../../net/minecraft/world/entity/npc/InventoryCarrier.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Property } from '../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GameTestHelper extends Object {
    constructor(testInfo: GameTestInfo)
    // private finalCheckAdded: boolean;
    // private testInfo: GameTestInfo;
    absoluteAABB(relativeAABB: AABB): AABB;
    absolutePos(relativePos: BlockPos): BlockPos;
    absoluteVec(relativeVec: Vec3): Vec3;
    assertAtTickTimeContainerContains(time: number, pos: BlockPos, item: Item): void;
    assertAtTickTimeContainerEmpty(time: number, pos: BlockPos): void;
    assertBlock(pos: BlockPos, predicate: (param0: Block) => boolean, errorMessage: (param0: Block) => Component): void;
    assertBlockEntityData<T extends BlockEntity>(pos: BlockPos, type: Class<T>, predicate: (param0: T) => boolean, errorMessage: () => Component): void;
    assertBlockNotPresent(blockType: Block, x: number, y: number, z: number): void;
    assertBlockNotPresent(blockType: Block, pos: BlockPos): void;
    assertBlockPresent(blockType: Block): void;
    assertBlockPresent(blockType: Block, x: number, y: number, z: number): void;
    assertBlockPresent(blockType: Block, pos: BlockPos): void;
    assertBlockProperty<T extends Comparable<T>>(pos: BlockPos, property: Property<T>, value: T): void;
    assertBlockProperty<T extends Comparable<T>>(pos: BlockPos, property: Property<T>, predicate: (param0: T) => boolean, errorMessage: Component): void;
    assertBlockState(pos: BlockPos, predicate: (param0: BlockState) => boolean, errorMessage: (param0: BlockState) => Component): void;
    assertBlockState(pos: BlockPos, expected: BlockState): void;
    assertBlockTag(tag: TagKey<Block>, pos: BlockPos): void;
    assertContainerContains(pos: BlockPos, item: Item): void;
    assertContainerContainsSingle(pos: BlockPos, item: Item): void;
    assertContainerEmpty(pos: BlockPos): void;
    assertEntitiesPresent(entityType: EntityType<Object>, expectedEntities: number): void;
    assertEntitiesPresent(entityType: EntityType<Object>, pos: BlockPos, numOfExpectedEntities: number, distance: number): void;
    assertEntityData<E extends Entity, T extends Object | number | string | boolean>(pos: BlockPos, entityType: EntityType<E>, dataAccessor: (param0: E) => T, data: T): void;
    assertEntityData<E extends Entity>(pos: BlockPos, entityType: EntityType<E>, test: (param0: E) => boolean): void;
    assertEntityData<E extends Entity, T extends Object | number | string | boolean>(box: AABB, entityType: EntityType<E>, dataAccessor: (param0: E) => T, data: T): void;
    assertEntityInstancePresent(entity: Entity, x: number, y: number, z: number): void;
    assertEntityInstancePresent(entity: Entity, pos: BlockPos): void;
    assertEntityInstancePresent(entity: Entity, pos: BlockPos, inflate: number): void;
    assertEntityInventoryContains<E extends Entity & InventoryCarrier>(pos: BlockPos, entityType: EntityType<E>, item: Item): void;
    assertEntityIsHolding<E extends LivingEntity>(pos: BlockPos, entityType: EntityType<E>, item: Item): void;
    assertEntityNotPresent(entityType: EntityType<Object>): void;
    assertEntityNotPresent(entityType: EntityType<Object>, x: number, y: number, z: number): void;
    assertEntityNotPresent(entityType: EntityType<Object>, pos: BlockPos): void;
    assertEntityNotPresent(entityType: EntityType<Object>, relativeAABB: AABB): void;
    assertEntityNotTouching(entityType: EntityType<Object>, x: number, y: number, z: number): void;
    assertEntityPresent(entityType: EntityType<Object>): void;
    assertEntityPresent(entityType: EntityType<Object>, x: number, y: number, z: number): void;
    assertEntityPresent(entityType: EntityType<Object>, pos: BlockPos): void;
    assertEntityPresent(entityType: EntityType<Object>, pos: BlockPos, distance: number): void;
    assertEntityPresent(entityType: EntityType<Object>, relativeAABB: AABB): void;
    assertEntityPresent(entityType: EntityType<Object>, relativeAABB: AABB, message: Component): void;
    assertEntityProperty<E extends Entity, T extends Object | number | string | boolean>(entity: E, test: (param0: E) => T, expected: T, description: Component): void;
    assertEntityProperty<E extends Entity>(entity: E, test: (param0: E) => boolean, description: Component): void;
    assertEntityTouching(entityType: EntityType<Object>, x: number, y: number, z: number): void;
    assertFalse(condition: boolean, errorMessage: string): void;
    assertFalse(condition: boolean, errorMessage: Component): void;
    assertItemEntityCountIs(itemType: Item, pos: BlockPos, distance: number, count: number): void;
    assertItemEntityNotPresent(itemType: Item): void;
    assertItemEntityNotPresent(itemType: Item, pos: BlockPos, distance: number): void;
    assertItemEntityPresent(itemType: Item): void;
    assertItemEntityPresent(itemType: Item, pos: BlockPos, distance: number): void;
    assertLivingEntityHasMobEffect(entity: LivingEntity, mobEffect: Holder<MobEffect>, amplifier: number): void;
    assertRedstoneSignal(pos: BlockPos, direction: Direction, levelPredicate: (param0: number) => boolean, errorMessage: () => Component): void;
    assertSameBlockState(sourcePos: BlockPos, targetPos: BlockPos): void;
    assertSameBlockStates(sourceBoundingBox: BoundingBox, targetBoundingBoxCorner: BlockPos): void;
    assertTrue(condition: boolean, errorMessage: string): void;
    assertTrue(condition: boolean, errorMessage: Component): void;
    assertValueEqual<N extends Object | number | string | boolean>(value: N, expected: N, valueName: string): void;
    assertValueEqual<N extends Object | number | string | boolean>(value: N, expected: N, valueName: Component): void;
    assertionException(descriptionId: string, arguments: Object[]): GameTestAssertException;
    assertionException(pos: BlockPos, descriptionId: string, arguments: Object[]): GameTestAssertPosException;
    assertionException(pos: BlockPos, description: Component): GameTestAssertPosException;
    assertionException(description: Component): GameTestAssertException;
    despawnItem(pos: BlockPos, distance: number): void;
    destroyBlock(pos: BlockPos): void;
    discard(entity: Entity): void;
    // private ensureSingleFinalCheck(): void;
    fail(message: string): void;
    fail(message: Component): void;
    fail(message: Component, pos: BlockPos): void;
    fail(message: Component, entity: Entity): void;
    failIf(asserter: () => void): void;
    failIfEver(asserter: () => void): void;
    findClosestEntity<E extends Entity>(entityType: EntityType<E>, x: number, y: number, z: number, distance: number): E;
    findEntities<E extends Entity>(entityType: EntityType<E>, x: number, y: number, z: number, distance: number): E[];
    findEntities<E extends Entity>(entityType: EntityType<E>, pos: Vec3, distance: number): E[];
    findOneEntity<E extends Entity>(entityType: EntityType<E>): E;
    forEveryBlockInStructure(forBlock: (param0: BlockPos) => void): void;
    getAbsoluteDirection(direction: Direction): Direction;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: Class<T>): T;
    getBlockState(pos: BlockPos): BlockState;
    getBounds(): AABB;
    getBoundsWithPadding(): AABB;
    getEntities<T extends Entity>(entityType: EntityType<T>): T[];
    getEntities<T extends Entity>(entityType: EntityType<T>, pos: BlockPos, distance: number): T[];
    getHeight(heightmap: Heightmap$Types, x: number, z: number): number;
    getLevel(): ServerLevel;
    getRelativeBounds(): AABB;
    getTestDirection(): Direction;
    getTestRotation(): Rotation;
    getTick(): number;
    hurt(entity: Entity, source: DamageSource, damage: number): void;
    kill(entity: Entity): void;
    killAllEntities(): void;
    killAllEntitiesOfClass(baseClass: Class<Entity>): void;
    makeAboutToDrown(entity: LivingEntity): LivingEntity;
    makeMockPlayer(gameType: GameType): Player;
    makeMockServerPlayerInLevel(): ServerPlayer;
    moveTo(mob: Mob, x: number, y: number, z: number): void;
    moveTo(mob: Mob, pos: BlockPos): void;
    moveTo(mob: Mob, pos: Vec3): void;
    onEachTick(action: () => void): void;
    placeAt(player: Player, blockStack: ItemStack, pos: BlockPos, face: Direction): void;
    placeBlock(x: number, y: number, z: number, block: Block, placeDirection: Direction): void;
    placeBlock(relativePos: BlockPos, block: Block, relativePlaceDirection: Direction): void;
    pressButton(x: number, y: number, z: number): void;
    pressButton(buttonPos: BlockPos): void;
    pullLever(x: number, y: number, z: number): void;
    pullLever(leverPos: BlockPos): void;
    pulseRedstone(pos: BlockPos, duration: number): void;
    randomTick(pos: BlockPos): void;
    relativeAABB(absoluteAABB: AABB): AABB;
    relativePos(absolutePos: BlockPos): BlockPos;
    relativeVec(absoluteVec: Vec3): Vec3;
    runAfterDelay(ticksToDelay: number, whatToRun: () => void): void;
    runAtTickTime(time: number, asserter: () => void): void;
    runBeforeTestEnd(asserter: () => void): void;
    setBiome(biome: ResourceKey<Biome>): void;
    setBlock(x: number, y: number, z: number, block: Block): void;
    setBlock(x: number, y: number, z: number, state: BlockState): void;
    setBlock(blockPos: BlockPos, block: Block): void;
    setBlock(blockPos: BlockPos, block: Block, direction: Direction): void;
    setBlock(blockPos: BlockPos, state: BlockState): void;
    setBlock(blockPos: BlockPos, blockState: BlockState, direction: Direction): void;
    setTime(ticks: number): void;
    spawn<E extends Entity>(entityType: EntityType<E>, x: number, y: number, z: number): E;
    spawn<E extends Mob>(entityType: EntityType<E>, x: number, y: number, z: number, entitySpawnReason: EntitySpawnReason): E;
    spawn<E extends Entity>(entityType: EntityType<E>, pos: BlockPos): E;
    spawn<E extends Entity>(entityType: EntityType<E>, pos: BlockPos, amount: number): E[];
    spawn<E extends Entity>(entityType: EntityType<E>, pos: Vec3): E;
    spawn<E extends Entity>(entityType: EntityType<E>, pos: Vec3, amount: number): E[];
    spawn<E extends Entity>(entityType: EntityType<E>, pos: Vec3, spawnReason: EntitySpawnReason): E;
    spawnItem(item: Item, x: number, y: number, z: number): ItemEntity;
    spawnItem(item: Item, pos: BlockPos): ItemEntity;
    spawnItem(item: Item, pos: Vec3): ItemEntity;
    spawnWithNoFreeWill<E extends Mob>(entityType: EntityType<E>, x: number, y: number, z: number): E;
    spawnWithNoFreeWill<E extends Mob>(entityType: EntityType<E>, pos: BlockPos): E;
    spawnWithNoFreeWill<E extends Mob>(entityType: EntityType<E>, pos: Vec3): E;
    startSequence(): GameTestSequence;
    succeed(): void;
    succeedIf(asserter: () => void): void;
    succeedOnTickWhen(tick: number, asserter: () => void): void;
    succeedWhen(asserter: () => void): void;
    succeedWhenBlockPresent(block: Block, x: number, y: number, z: number): void;
    succeedWhenBlockPresent(block: Block, pos: BlockPos): void;
    succeedWhenEntityData<E extends Entity, T extends Object | number | string | boolean>(pos: BlockPos, entityType: EntityType<E>, dataAccessor: (param0: E) => T, data: T): void;
    succeedWhenEntityNotPresent(entityType: EntityType<Object>, x: number, y: number, z: number): void;
    succeedWhenEntityNotPresent(entityType: EntityType<Object>, pos: BlockPos): void;
    succeedWhenEntityPresent(entityType: EntityType<Object>, x: number, y: number, z: number): void;
    succeedWhenEntityPresent(entityType: EntityType<Object>, pos: BlockPos): void;
    tickBlock(pos: BlockPos): void;
    tickPrecipitation(): void;
    tickPrecipitation(pos: BlockPos): void;
    useBlock(relativePos: BlockPos): void;
    useBlock(relativePos: BlockPos, player: Player): void;
    useBlock(relativePos: BlockPos, player: Player, hitResult: BlockHitResult): void;
    walkTo(mob: Mob, targetPos: BlockPos, speedModifier: number): GameTestSequence;
    withLowHealth(entity: LivingEntity): LivingEntity;
}