import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { HoleManagerSubscriber } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/hole/HoleManagerSubscriber.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * HoleESP module
 *
 * Detects and displays safe spots for Crystal PvP.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHoleESP.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHoleESP.kt:49}
 */
export class ModuleHoleESP extends ClientModule implements HoleManagerSubscriber {
    static INSTANCE: ModuleHoleESP;
    // private color1by1: Color4b;
    // private /*not mapped: */ getColor1by1(): Color4b;
    // private color1by2: Color4b;
    // private /*not mapped: */ getColor1by2(): Color4b;
    // private color2by2: Color4b;
    // private /*not mapped: */ getColor2by2(): Color4b;
    // private colorBedrock: Color4b;
    // private /*not mapped: */ getColorBedrock(): Color4b;
    // private distanceFade: number;
    // private /*not mapped: */ getDistanceFade(): number;
    // private horizontalDistance: number;
    // private /*not mapped: */ getHorizontalDistance(): number;
    // private modes: ModeValueGroup<Mode>;
    // private verticalDistance: number;
    // private /*not mapped: */ getVerticalDistance(): number;
    // private calculateFade(pos: BlockPos): number;
    horizontalDistance(): number;
    onDisabled(): void;
    onEnabled(): void;
    verticalDistance(): number;
}