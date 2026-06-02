import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export interface DoubleFaceConsumer extends Object{
    consume(direction: Direction, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void;
}