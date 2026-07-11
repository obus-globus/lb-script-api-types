import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export abstract class GenericColorMode<T extends unknown> extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    // private isParamSensitive: boolean;
    /**
     * @returns Whether the color mode is sensitive to the parameter of {@link getColor}.
If false, it can be used as ColorModulator (shader color)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderConfigurables.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderConfigurables.kt:40}
     */
    /*not mapped: */ isParamSensitive(): boolean;
    getColor(param: T): Color4b;
}