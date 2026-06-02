import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { WorldBorderPositionListenerMulti } from '../../../../../net/caffeinemc/mods/lithium/common/world/listeners/WorldBorderPositionListenerMulti.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BorderChangeListener } from '../../../../../net/minecraft/world/level/border/BorderChangeListener.d.ts'
import type { BorderStatus } from '../../../../../net/minecraft/world/level/border/BorderStatus.d.ts'
import type { WorldBorder$BorderExtent } from '../../../../../net/minecraft/world/level/border/WorldBorder$BorderExtent.d.ts'
import type { WorldBorder$Settings } from '../../../../../net/minecraft/world/level/border/WorldBorder$Settings.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class WorldBorder extends SavedData {
    static CODEC: Codec<WorldBorder>;
    static MAX_CENTER_COORDINATE: number;
    static MAX_SIZE: number;
    static TYPE: SavedDataType<WorldBorder>;
    constructor()
    constructor(settings: WorldBorder$Settings)
    readonly absoluteMaxSize: number;
    readonly centerX: number;
    readonly centerZ: number;
    readonly damagePerBlock: number;
    // private extent: WorldBorder$BorderExtent;
    // private initialized: boolean;
    // private listeners: BorderChangeListener[];
    readonly safeZone: number;
    // private settings: WorldBorder$Settings;
    readonly warningBlocks: number;
    readonly warningTime: number;
    // private worldBorderPositionListenerMulti: WorldBorderPositionListenerMulti;
    addListener(listener: BorderChangeListener): void;
    applyInitialSettings(gameTime: number): void;
    clampToBounds(x: number, y: number, z: number): BlockPos;
    clampToBounds(position: BlockPos): BlockPos;
    clampToBounds(position: Vec3): BlockPos;
    clampVec3ToBound(x: number, y: number, z: number): Vec3;
    clampVec3ToBound(position: Vec3): Vec3;
    getAbsoluteMaxSize(): number;
    getCenterX(): number;
    getCenterZ(): number;
    getCollisionShape(): VoxelShape;
    getDamagePerBlock(): number;
    getDistanceToBorder(x: number, z: number): number;
    getDistanceToBorder(entity: Entity): number;
    getLerpSpeed(): number;
    getLerpTarget(): number;
    getLerpTime(): number;
    getListeners(): BorderChangeListener[];
    getMaxX(): number;
    getMaxX(deltaPartialTick: number): number;
    getMaxZ(): number;
    getMaxZ(deltaPartialTick: number): number;
    getMinX(): number;
    getMinX(deltaPartialTick: number): number;
    getMinZ(): number;
    getMinZ(deltaPartialTick: number): number;
    getSafeZone(): number;
    getSize(): number;
    getStatus(): BorderStatus;
    getWarningBlocks(): number;
    getWarningTime(): number;
    isInsideCloseToBorder(source: Entity, boundingBox: AABB): boolean;
    isWithinBounds(x: number, z: number): boolean;
    isWithinBounds(x: number, z: number, margin: number): boolean;
    // private isWithinBounds(minX: number, minZ: number, maxX: number, maxZ: number): boolean;
    isWithinBounds(pos: BlockPos): boolean;
    isWithinBounds(pos: ChunkPos): boolean;
    isWithinBounds(aabb: AABB): boolean;
    isWithinBounds(pos: Vec3): boolean;
    lerpSizeBetween(from: number, to: number, ticks: number, gameTime: number): void;
    removeListener(listener: BorderChangeListener): void;
    setAbsoluteMaxSize(absoluteMaxSize: number): void;
    setCenter(x: number, z: number): void;
    setDamagePerBlock(damagePerBlock: number): void;
    setSafeZone(safeZone: number): void;
    setSize(size: number): void;
    setWarningBlocks(warningBlocks: number): void;
    setWarningTime(warningTime: number): void;
    tick(): void;
}