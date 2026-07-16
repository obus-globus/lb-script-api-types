import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AngerManagement } from '../../../../../../net/minecraft/world/entity/monster/warden/AngerManagement.d.ts'
export class AngerManagement$Sorter extends Record implements Comparator<Entity> {
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    constructor(angerManagement: AngerManagement)
    // private angerManagement: AngerManagement;
    angerManagement(): AngerManagement;
    compare(entity1: Entity, entity2: Entity): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    reversed(): (param0: Entity, param1: Entity) => number;
    thenComparing(arg0: (param0: Entity, param1: Entity) => number): (param0: Entity, param1: Entity) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Entity) => U): (param0: Entity, param1: Entity) => number;
    thenComparing<U extends unknown>(arg0: (param0: Entity) => U, arg1: (param0: U, param1: U) => number): (param0: Entity, param1: Entity) => number;
    thenComparingDouble(arg0: (param0: Entity) => number): (param0: Entity, param1: Entity) => number;
    thenComparingInt(arg0: (param0: Entity) => number): (param0: Entity, param1: Entity) => number;
    thenComparingLong(arg0: (param0: Entity) => number): (param0: Entity, param1: Entity) => number;
    toString(): string;
}