import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { BlockSource } from '../../../../net/minecraft/core/dispenser/BlockSource.d.ts'
export interface ProjectileItem$PositionFunction extends Object{
    getDispensePosition(source: BlockSource, direction: Direction): Position;
}