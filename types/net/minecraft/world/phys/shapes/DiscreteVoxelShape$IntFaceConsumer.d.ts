import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export interface DiscreteVoxelShape$IntFaceConsumer extends Object{
    consume(direction: Direction, x: number, y: number, z: number): void;
}