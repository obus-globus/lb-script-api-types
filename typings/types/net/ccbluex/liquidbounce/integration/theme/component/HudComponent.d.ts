import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { HudComponentTweak } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { Alignment } from '../../../../../../net/ccbluex/liquidbounce/utils/render/Alignment.d.ts'
/**
 * Represents a HUD component
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt:31}
 */
export abstract class HudComponent extends ToggleableValueGroup {
    constructor(name: string, enabled: boolean, alignment: Alignment, tweaks: HudComponentTweak[], componentDescription: string)
    readonly alignment: Alignment;
    readonly componentDescription: string;
    // private defaultAlignment: Alignment;
    readonly id: UUID;
    readonly tweaks: HudComponentTweak[];
    protected registerComponentListen(valueGroup: ValueGroup): void;
    resetAlignment(): void;
}