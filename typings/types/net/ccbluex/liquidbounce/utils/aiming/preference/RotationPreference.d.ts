import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface RotationPreference extends Comparator<Rotation>, Object {
    getPreferredSpot(eyesPos: Vec3, range: number): Vec3;
    getPreferredSpotOnBox(box: AABB, eyesPos: Vec3, range: number): Vec3;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Rotation) => U): (param0: Object) => boolean;
    thenComparing<U extends unknown>(arg0: (param0: Rotation) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: Rotation) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: Rotation) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: Rotation) => number): (param0: Object) => boolean;
}