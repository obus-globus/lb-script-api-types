import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Climate$DistanceMetric } from '../../../../../net/minecraft/world/level/biome/Climate$DistanceMetric.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { Climate$RTree$Node } from '../../../../../net/minecraft/world/level/biome/Climate$RTree$Node.d.ts'
export class Climate$RTree$Leaf<T extends Object | number | string | boolean> extends Climate$RTree$Node<T> {
    private constructor(parameterPoint: Climate$ParameterPoint, value: T)
    // private value: T;
    search(target: number[], candidate: Climate$RTree$Leaf<T>, distanceMetric: Climate$DistanceMetric<T>): Climate$RTree$Leaf<T>;
}