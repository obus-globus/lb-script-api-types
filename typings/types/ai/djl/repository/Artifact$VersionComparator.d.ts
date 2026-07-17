import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class Artifact$VersionComparator extends Object implements Serializable, Comparator<Artifact> {
    constructor()
    compare(arg0: Artifact, arg1: Artifact): number;
    reversed(): (param0: Artifact, param1: Artifact) => number;
    thenComparing(arg0: (param0: Artifact, param1: Artifact) => number): (param0: Artifact, param1: Artifact) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Artifact) => U): (param0: Artifact, param1: Artifact) => number;
    thenComparing<U extends unknown>(arg0: (param0: Artifact) => U, arg1: (param0: U, param1: U) => number): (param0: Artifact, param1: Artifact) => number;
    thenComparingDouble(arg0: (param0: Artifact) => number): (param0: Artifact, param1: Artifact) => number;
    thenComparingInt(arg0: (param0: Artifact) => number): (param0: Artifact, param1: Artifact) => number;
    thenComparingLong(arg0: (param0: Artifact) => number): (param0: Artifact, param1: Artifact) => number;
}