import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class GlobalSettingsRichPresence$PresenceAsset extends Enum<GlobalSettingsRichPresence$PresenceAsset> implements Tagged {
    static Companion: Tagged$Companion;
    static LOGO: GlobalSettingsRichPresence$PresenceAsset;
    static getEntries(): GlobalSettingsRichPresence$PresenceAsset[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): GlobalSettingsRichPresence$PresenceAsset;
    static values(): GlobalSettingsRichPresence$PresenceAsset[];
    private constructor(tag: string, assetValue: string | null)
    readonly assetValue: string | null;
    readonly tag: string;
    name(): "LOGO";
}