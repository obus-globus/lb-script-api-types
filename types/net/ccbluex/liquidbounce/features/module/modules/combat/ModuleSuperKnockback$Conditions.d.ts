import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleSuperKnockback$Conditions extends Enum<ModuleSuperKnockback$Conditions> implements Predicate<Entity>, Tagged {
    static Companion: Tagged$Companion;
    static NOT_IN_WATER: ModuleSuperKnockback$Conditions;
    static ONLY_FACING: ModuleSuperKnockback$Conditions;
    static ONLY_ON_GROUND: ModuleSuperKnockback$Conditions;
    static getEntries(): ModuleSuperKnockback$Conditions[];
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSuperKnockback$Conditions;
    static values(): (Object | null)[];
    private constructor(tag: string, testCondition: (param0: Entity) => kotlin.Boolean)
    readonly tag: string;
    // private testCondition: (param0: Entity) => kotlin.Boolean;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(p0: Entity): boolean;
    name(): "ONLY_FACING" | "ONLY_ON_GROUND" | "NOT_IN_WATER";
}