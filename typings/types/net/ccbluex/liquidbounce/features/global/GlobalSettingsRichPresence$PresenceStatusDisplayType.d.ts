import type { StatusDisplayType } from '../../../../../com/jagrosh/discordipc/entities/StatusDisplayType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class GlobalSettingsRichPresence$PresenceStatusDisplayType extends Enum<GlobalSettingsRichPresence$PresenceStatusDisplayType> implements Tagged {
    static Companion: Tagged$Companion;
    static DETAILS: GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static NAME: GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static STATE: GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static getEntries(): GlobalSettingsRichPresence$PresenceStatusDisplayType[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): GlobalSettingsRichPresence$PresenceStatusDisplayType;
    static values(): GlobalSettingsRichPresence$PresenceStatusDisplayType[];
    private constructor(tag: string, statusDisplayType: StatusDisplayType)
    readonly statusDisplayType: StatusDisplayType;
    readonly tag: string;
    name(): "NAME" | "STATE" | "DETAILS";
}