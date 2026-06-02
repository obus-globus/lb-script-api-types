import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export abstract class GenericColorMode<T extends Object | number | string | boolean> extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    // private isParamSensitive: boolean;
    /**
     * @returns Whether the color mode is sensitive to the parameter of {@link getColor}.
If false, it can be used as ColorModulator (shader color)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/RenderConfigurables.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/render/RenderConfigurables.kt:36}
     */
    /*not mapped: */ isParamSensitive(): boolean;
    getColor(param: T): Color4b;
}