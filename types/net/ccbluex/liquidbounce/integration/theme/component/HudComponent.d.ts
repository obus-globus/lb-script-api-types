import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { HudComponentTweak } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { Alignment } from '../../../../../../net/ccbluex/liquidbounce/utils/render/Alignment.d.ts'
/**
 * Represents a HUD component
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt:28}
 */
export abstract class HudComponent extends ToggleableValueGroup {
    constructor(name: string, enabled: boolean, alignment: Alignment, tweaks: HudComponentTweak[])
    readonly alignment: Alignment;
    readonly id: UUID;
    readonly tweaks: HudComponentTweak[];
    protected registerComponentListen(valueGroup: ValueGroup): void;
}