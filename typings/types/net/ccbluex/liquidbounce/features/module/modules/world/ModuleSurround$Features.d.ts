import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSurround$Features extends Enum<ModuleSurround$Features> implements Tagged {
    static CENTER: ModuleSurround$Features;
    static Companion: Tagged$Companion;
    static DOWN: ModuleSurround$Features;
    static EXTEND: ModuleSurround$Features;
    static NO_WASTE: ModuleSurround$Features;
    static getEntries(): ModuleSurround$Features[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSurround$Features;
    static values(): ModuleSurround$Features[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CENTER" | "EXTEND" | "NO_WASTE" | "DOWN";
}