import type { RealmsServer } from '../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class RealmsServer$McoServerComparator extends Object implements Comparator<RealmsServer> {
    constructor(owner: string)
    // private refOwner: string;
    compare(server1: RealmsServer, server2: RealmsServer): number;
    reversed(): (param0: RealmsServer, param1: RealmsServer) => number;
    thenComparing(arg0: (param0: RealmsServer, param1: RealmsServer) => number): (param0: RealmsServer, param1: RealmsServer) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: RealmsServer) => U): (param0: RealmsServer, param1: RealmsServer) => number;
    thenComparing<U extends unknown>(arg0: (param0: RealmsServer) => U, arg1: (param0: U, param1: U) => number): (param0: RealmsServer, param1: RealmsServer) => number;
    thenComparingDouble(arg0: (param0: RealmsServer) => number): (param0: RealmsServer, param1: RealmsServer) => number;
    thenComparingInt(arg0: (param0: RealmsServer) => number): (param0: RealmsServer, param1: RealmsServer) => number;
    thenComparingLong(arg0: (param0: RealmsServer) => number): (param0: RealmsServer, param1: RealmsServer) => number;
}