import type { StatusDisplayType } from '../../../../../com/jagrosh/discordipc/entities/StatusDisplayType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class GlobalSettingsRichPresence$PresenceStatusDisplayType extends Enum<GlobalSettingsRichPresence$PresenceStatusDisplayType> implements Tagged {
    static Companion: Tagged$Companion;
    static DETAILS: GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static NAME: GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static STATE: GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static getEntries(): GlobalSettingsRichPresence$PresenceStatusDisplayType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static values(): GlobalSettingsRichPresence$PresenceStatusDisplayType[];
    private constructor(tag: string, statusDisplayType: StatusDisplayType)
    readonly statusDisplayType: StatusDisplayType;
    readonly tag: string;
    name(): "NAME" | "STATE" | "DETAILS";
}