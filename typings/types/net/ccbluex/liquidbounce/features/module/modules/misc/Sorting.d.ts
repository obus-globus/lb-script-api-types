import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Sorting;
    static values(): Sorting[];
    private constructor(tag: string, comparator: ((param0: PlayerInfo, param1: PlayerInfo) => number) | null)
    readonly comparator: ((param0: PlayerInfo, param1: PlayerInfo) => number) | null;
    readonly tag: string;
    name(): "VANILLA" | "PING" | "LENGTH" | "SCORE_LENGTH" | "ALPHABETICAL" | "REVERSE_ALPHABETICAL" | "NONE";
}