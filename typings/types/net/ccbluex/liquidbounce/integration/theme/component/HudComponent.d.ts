import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { HudComponentTweak } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { Alignment } from '../../../../../../net/ccbluex/liquidbounce/utils/render/Alignment.d.ts'
/**
 * Represents a HUD component
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponent.kt:32}
 */
export abstract class HudComponent extends ToggleableValueGroup {
    constructor(name: string, enabled: boolean, alignment: Alignment, tweaks: HudComponentTweak[], componentDescription: string)
    readonly alignment: Alignment;
    readonly componentDescription: string;
    // private defaultAlignment: Alignment;
    readonly id: UUID;
    readonly tweaks: HudComponentTweak[];
    // private zIndex: number;
    /*not mapped: */ getZIndex(): number;
    protected registerComponentListen(valueGroup: ValueGroup): void;
    resetAlignment(): void;
}