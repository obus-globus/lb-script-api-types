import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class HorizontalAnchor extends Enum<HorizontalAnchor> implements Tagged {
    static CENTER: HorizontalAnchor;
    static Companion: Tagged$Companion;
    static END: HorizontalAnchor;
    static START: HorizontalAnchor;
    static getEntries(): HorizontalAnchor[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): HorizontalAnchor;
    static values(): HorizontalAnchor[];
    private constructor(tag: string)
    readonly tag: string;
    /**
     * @param x Anchor X position
     * @param width Unscaled text width
     * @param scale Render scale
     * @returns Draw (top-left) X position
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/HorizontalAnchor.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/HorizontalAnchor.kt:44}
     */
    anchorToDrawX(x: number, width: number, scale: number): number;
    name(): "START" | "CENTER" | "END";
}