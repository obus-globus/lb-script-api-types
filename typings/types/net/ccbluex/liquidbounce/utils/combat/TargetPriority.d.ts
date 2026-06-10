import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class TargetPriority extends Enum<TargetPriority> implements Comparator<LivingEntity>, Tagged {
    /**
     * Oldest entity first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L241 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:241}
     */
    static AGE: TargetPriority;
    static Companion: Tagged$Companion;
    /**
     * Closest to your crosshair first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L225 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:225}
     */
    static DIRECTION: TargetPriority;
    /**
     * Closest to you first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L217 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:217}
     */
    static DISTANCE: TargetPriority;
    /**
     * Lowest health first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L209 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:209}
     */
    static HEALTH: TargetPriority;
    /**
     * With the lowest hurt time first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L233 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:233}
     */
    static HURT_TIME: TargetPriority;
    /**
     * Player first
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L193 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:193}
     */
    static TYPE: TargetPriority;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static getEntries(): TargetPriority[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static of(paramarg0: string): Tagged;
    static reverseOrder(): (param0: Object) => boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TargetPriority;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: LivingEntity) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: LivingEntity) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: LivingEntity) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: LivingEntity) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: LivingEntity) => number): (param0: Object) => boolean;
    name(): "TYPE" | "HEALTH" | "DISTANCE" | "DIRECTION" | "HURT_TIME" | "AGE";
}