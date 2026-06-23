import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Climate$RTree$Node } from '../../../../../net/minecraft/world/level/biome/Climate$RTree$Node.d.ts'
export interface Climate$DistanceMetric<T extends unknown> extends Object{
    distance(node: Climate$RTree$Node<T>, target: number[]): number;
}