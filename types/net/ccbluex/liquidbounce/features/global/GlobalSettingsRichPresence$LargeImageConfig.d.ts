import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { GlobalSettingsRichPresence$PresenceAsset } from '../../../../../net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence$PresenceAsset.d.ts'
import type { GlobalSettingsRichPresence$RichPresencePart } from '../../../../../net/ccbluex/liquidbounce/features/global/GlobalSettingsRichPresence$RichPresencePart.d.ts'
export class GlobalSettingsRichPresence$LargeImageConfig extends ToggleableValueGroup {
    static INSTANCE: GlobalSettingsRichPresence$LargeImageConfig;
    readonly asset: GlobalSettingsRichPresence$PresenceAsset;
    readonly parts: GlobalSettingsRichPresence$RichPresencePart[];
}