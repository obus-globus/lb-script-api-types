import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Function2 } from '../../../../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Regex } from '../../../../../../../kotlin/text/Regex.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { PlayerInfo } from '../../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
export class PlayerFilter$Filter extends Enum<PlayerFilter$Filter> implements Tagged {
    static Companion: Tagged$Companion;
    static DISPLAY_NAME: PlayerFilter$Filter;
    static PLAYER_NAME: PlayerFilter$Filter;
    static getEntries(): PlayerFilter$Filter[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerFilter$Filter;
    static values(): (Object | null)[];
    private constructor(tag: string, matches: Function2<PlayerInfo, Regex, boolean>)
    readonly matches: (param0: PlayerInfo, param1: Regex) => boolean;
    readonly tag: string;
    name(): "DISPLAY_NAME" | "PLAYER_NAME";
}