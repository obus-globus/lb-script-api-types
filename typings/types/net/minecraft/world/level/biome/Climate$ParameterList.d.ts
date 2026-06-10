import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Climate$DistanceMetric } from '../../../../../net/minecraft/world/level/biome/Climate$DistanceMetric.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { Climate$RTree } from '../../../../../net/minecraft/world/level/biome/Climate$RTree.d.ts'
import type { Climate$TargetPoint } from '../../../../../net/minecraft/world/level/biome/Climate$TargetPoint.d.ts'
export class Climate$ParameterList<T extends Object | number | string | boolean> extends Object {
    static codec(paramvalueCodec: MapCodec<Object>): Codec<Climate$ParameterList<Object>>;
    constructor(values: Pair<Climate$ParameterPoint, T>[])
    // private index: Climate$RTree<T>;
    // private values: Pair<Climate$ParameterPoint, T>[];
    findValue(target: Climate$TargetPoint): T;
    findValueBruteForce(target: Climate$TargetPoint): T;
    findValueIndex(target: Climate$TargetPoint): T;
    findValueIndex(target: Climate$TargetPoint, distanceMetric: Climate$DistanceMetric<T>): T;
    values(): Pair<Climate$ParameterPoint, T>[];
}