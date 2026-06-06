import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { HudComponentTweak } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { Alignment } from '../../../../../../net/ccbluex/liquidbounce/utils/render/Alignment.d.ts'
/**
 * Represents a HUD component
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt:28}
 */
export abstract class HudComponent extends ToggleableValueGroup {
    constructor(name: string, enabled: boolean, alignment: Alignment, tweaks: HudComponentTweak[])
    readonly alignment: Alignment;
    readonly id: UUID;
    readonly tweaks: HudComponentTweak[];
    protected registerComponentListen(valueGroup: ValueGroup): void;
}