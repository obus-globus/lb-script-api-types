import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ContainerItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ContainerItemSlot.d.ts'
export class ModuleChestStealer$Index$Order extends Enum<ModuleChestStealer$Index$Order> implements Comparator<ContainerItemSlot>, Tagged {
    static ASCENDING: ModuleChestStealer$Index$Order;
    static Companion: Tagged$Companion;
    static DESCENDING: ModuleChestStealer$Index$Order;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static getEntries(): ModuleChestStealer$Index$Order[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static of(paramarg0: string): Tagged;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleChestStealer$Index$Order;
    static values(): ModuleChestStealer$Index$Order[];
    private constructor(tag: string)
    readonly tag: string;
    reversed(): (param0: ContainerItemSlot, param1: ContainerItemSlot) => number;
    thenComparing(arg0: (param0: ContainerItemSlot, param1: ContainerItemSlot) => number): (param0: ContainerItemSlot, param1: ContainerItemSlot) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ContainerItemSlot) => U): (param0: ContainerItemSlot, param1: ContainerItemSlot) => number;
    thenComparing<U extends unknown>(arg0: (param0: ContainerItemSlot) => U, arg1: (param0: U, param1: U) => number): (param0: ContainerItemSlot, param1: ContainerItemSlot) => number;
    thenComparingDouble(arg0: (param0: ContainerItemSlot) => number): (param0: ContainerItemSlot, param1: ContainerItemSlot) => number;
    thenComparingInt(arg0: (param0: ContainerItemSlot) => number): (param0: ContainerItemSlot, param1: ContainerItemSlot) => number;
    thenComparingLong(arg0: (param0: ContainerItemSlot) => number): (param0: ContainerItemSlot, param1: ContainerItemSlot) => number;
    name(): "ASCENDING" | "DESCENDING";
}