import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSpammer$SpammerPattern extends Enum<ModuleSpammer$SpammerPattern> implements Tagged {
    static Companion: Tagged$Companion;
    static LINEAR: ModuleSpammer$SpammerPattern;
    static RANDOM: ModuleSpammer$SpammerPattern;
    static getEntries(): ModuleSpammer$SpammerPattern[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSpammer$SpammerPattern;
    static values(): ModuleSpammer$SpammerPattern[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "RANDOM" | "LINEAR";
}