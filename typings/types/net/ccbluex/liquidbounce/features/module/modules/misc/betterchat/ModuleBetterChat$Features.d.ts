import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBetterChat$Features extends Enum<ModuleBetterChat$Features> implements Tagged {
    static ANTI_CLEAR: ModuleBetterChat$Features;
    static Companion: Tagged$Companion;
    static FORCE_UNICODE_CHAT: ModuleBetterChat$Features;
    static INFINITE: ModuleBetterChat$Features;
    static KEEP_AFTER_DEATH: ModuleBetterChat$Features;
    static getEntries(): ModuleBetterChat$Features[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleBetterChat$Features;
    static values(): ModuleBetterChat$Features[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "INFINITE" | "ANTI_CLEAR" | "KEEP_AFTER_DEATH" | "FORCE_UNICODE_CHAT";
}