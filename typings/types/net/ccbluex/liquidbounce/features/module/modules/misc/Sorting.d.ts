import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { PlayerInfo } from '../../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
export class Sorting extends Enum<Sorting> implements Tagged {
    static ALPHABETICAL: Sorting;
    static Companion: Tagged$Companion;
    static LENGTH: Sorting;
    static NONE: Sorting;
    static PING: Sorting;
    static REVERSE_ALPHABETICAL: Sorting;
    static SCORE_LENGTH: Sorting;
    static VANILLA: Sorting;
    static getEntries(): Sorting[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Sorting;
    static values(): Sorting[];
    private constructor(tag: string, comparator: ((param0: PlayerInfo, param1: PlayerInfo) => number) | null)
    readonly comparator: ((param0: PlayerInfo, param1: PlayerInfo) => number) | null;
    readonly tag: string;
    name(): "VANILLA" | "PING" | "LENGTH" | "SCORE_LENGTH" | "ALPHABETICAL" | "REVERSE_ALPHABETICAL" | "NONE";
}