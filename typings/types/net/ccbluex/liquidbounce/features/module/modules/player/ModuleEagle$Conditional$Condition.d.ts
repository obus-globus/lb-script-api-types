import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
export class ModuleEagle$Conditional$Condition extends Enum<ModuleEagle$Conditional$Condition> implements Predicate<MovementInputEvent>, Tagged {
    static BACKWARDS: ModuleEagle$Conditional$Condition;
    static Companion: Tagged$Companion;
    static FORWARDS: ModuleEagle$Conditional$Condition;
    static HOLDING_BLOCKS: ModuleEagle$Conditional$Condition;
    static LEFT: ModuleEagle$Conditional$Condition;
    static ON_GROUND: ModuleEagle$Conditional$Condition;
    static RIGHT: ModuleEagle$Conditional$Condition;
    static SNEAK: ModuleEagle$Conditional$Condition;
    static getEntries(): ModuleEagle$Conditional$Condition[];
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleEagle$Conditional$Condition;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(event: MovementInputEvent): boolean;
    name(): "LEFT" | "RIGHT" | "FORWARDS" | "BACKWARDS" | "HOLDING_BLOCKS" | "ON_GROUND" | "SNEAK";
}