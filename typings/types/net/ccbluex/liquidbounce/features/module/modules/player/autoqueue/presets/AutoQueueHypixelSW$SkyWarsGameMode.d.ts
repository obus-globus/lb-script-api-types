import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class AutoQueueHypixelSW$SkyWarsGameMode extends Enum<AutoQueueHypixelSW$SkyWarsGameMode> implements Tagged {
    static Companion: Tagged$Companion;
    static INSANE: AutoQueueHypixelSW$SkyWarsGameMode;
    static NORMAL: AutoQueueHypixelSW$SkyWarsGameMode;
    static getEntries(): AutoQueueHypixelSW$SkyWarsGameMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AutoQueueHypixelSW$SkyWarsGameMode;
    static values(): (Object | null)[];
    private constructor(tag: string, joinName: string)
    readonly joinName: string;
    readonly tag: string;
    name(): "NORMAL" | "INSANE";
}