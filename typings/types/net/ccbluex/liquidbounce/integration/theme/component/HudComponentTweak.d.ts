import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * A set of tweaks that can be applied to the Original HUD by the component
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.kt:27}
 */
export class HudComponentTweak extends Enum<HudComponentTweak> implements Tagged {
    static Companion: Tagged$Companion;
    static DISABLE_CROSSHAIR: HudComponentTweak;
    static DISABLE_EXP_BAR: HudComponentTweak;
    static DISABLE_HELD_ITEM_TOOL_TIP: HudComponentTweak;
    static DISABLE_LOCATOR_BAR: HudComponentTweak;
    static DISABLE_OVERLAY_MESSAGE: HudComponentTweak;
    static DISABLE_SCOREBOARD: HudComponentTweak;
    static DISABLE_STATUS_BAR: HudComponentTweak;
    static DISABLE_STATUS_EFFECT_OVERLAY: HudComponentTweak;
    static TWEAK_HOTBAR: HudComponentTweak;
    static getEntries(): HudComponentTweak[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HudComponentTweak;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TWEAK_HOTBAR" | "DISABLE_CROSSHAIR" | "DISABLE_SCOREBOARD" | "DISABLE_STATUS_BAR" | "DISABLE_EXP_BAR" | "DISABLE_HELD_ITEM_TOOL_TIP" | "DISABLE_OVERLAY_MESSAGE" | "DISABLE_STATUS_EFFECT_OVERLAY" | "DISABLE_LOCATOR_BAR";
}