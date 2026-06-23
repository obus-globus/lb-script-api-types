import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Climate$DistanceMetric } from '../../../../../net/minecraft/world/level/biome/Climate$DistanceMetric.d.ts'
import type { Climate$Parameter } from '../../../../../net/minecraft/world/level/biome/Climate$Parameter.d.ts'
import type { Climate$RTree$Leaf } from '../../../../../net/minecraft/world/level/biome/Climate$RTree$Leaf.d.ts'
export abstract class Climate$RTree$Node<T extends unknown> extends Object {
    constructor(parameterSpace: Climate$Parameter[])
    // private parameterSpace: Climate$Parameter[];
    distance(target: number[]): number;
    search(target: number[], candidate: Climate$RTree$Leaf<T>, distanceMetric: Climate$DistanceMetric<T>): Climate$RTree$Leaf<T>;
    toString(): string;
}