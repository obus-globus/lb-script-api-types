import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HatsMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode.d.ts'
import type { Color4b } from '../../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
/**
 * @author minecrrrr
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/modes/HatsOrbs.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/modes/HatsOrbs.kt:39}
 */
export class HatsOrbs extends HatsMode {
    static Companion: Tagged$Companion;
    static INSTANCE: HatsOrbs;
    readonly color: Color4b;
    getColor(): Color4b;
    // private getPointX(angle: number, radius: number): number;
    // private getPointZ(angle: number, radius: number): number;
}