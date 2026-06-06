import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoCrafter$OnFull;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DISABLE" | "CLOSE_SCREEN" | "WAIT" | "THROW";
}