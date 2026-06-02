import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldBorder } from '../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export interface BorderChangeListener extends Object{
    onLerpSize(border: WorldBorder, fromSize: number, targetSize: number, ticks: number, gameTime: number): void;
    onSetCenter(border: WorldBorder, x: number, z: number): void;
    onSetDamagePerBlock(border: WorldBorder, damagePerBlock: number): void;
    onSetSafeZone(border: WorldBorder, safeZone: number): void;
    onSetSize(border: WorldBorder, newSize: number): void;
    onSetWarningBlocks(border: WorldBorder, blocks: number): void;
    onSetWarningTime(border: WorldBorder, time: number): void;
}