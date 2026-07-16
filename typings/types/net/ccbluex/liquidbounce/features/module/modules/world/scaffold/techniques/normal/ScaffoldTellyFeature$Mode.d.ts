import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ScaffoldTellyFeature$Mode extends Enum<ScaffoldTellyFeature$Mode> implements Tagged {
    static Companion: Tagged$Companion;
    static RESET: ScaffoldTellyFeature$Mode;
    static REVERSE: ScaffoldTellyFeature$Mode;
    static getEntries(): ScaffoldTellyFeature$Mode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ScaffoldTellyFeature$Mode;
    static values(): ScaffoldTellyFeature$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "REVERSE" | "RESET";
}