import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Climate$DistanceMetric } from '../../../../../net/minecraft/world/level/biome/Climate$DistanceMetric.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { Climate$RTree$Leaf } from '../../../../../net/minecraft/world/level/biome/Climate$RTree$Leaf.d.ts'
import type { Climate$RTree$Node } from '../../../../../net/minecraft/world/level/biome/Climate$RTree$Node.d.ts'
import type { Climate$TargetPoint } from '../../../../../net/minecraft/world/level/biome/Climate$TargetPoint.d.ts'
export class Climate$RTree<T extends unknown> extends Object {
    static create<T extends unknown>(paramvalues: Pair<Climate$ParameterPoint, T>[]): Climate$RTree<T>;
    private constructor(root: Climate$RTree$Node<T>)
    // private lastResult: ThreadLocal<Climate$RTree$Leaf<T>>;
    // private root: Climate$RTree$Node<T>;
    search(target: Climate$TargetPoint, distanceMetric: Climate$DistanceMetric<T>): T;
}