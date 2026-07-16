import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoCrafter$OnFull extends Enum<ModuleAutoCrafter$OnFull> implements Tagged {
    static CLOSE_SCREEN: ModuleAutoCrafter$OnFull;
    static Companion: Tagged$Companion;
    static DISABLE: ModuleAutoCrafter$OnFull;
    static THROW: ModuleAutoCrafter$OnFull;
    static WAIT: ModuleAutoCrafter$OnFull;
    static getEntries(): ModuleAutoCrafter$OnFull[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoCrafter$OnFull;
    static values(): ModuleAutoCrafter$OnFull[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DISABLE" | "CLOSE_SCREEN" | "WAIT" | "THROW";
}