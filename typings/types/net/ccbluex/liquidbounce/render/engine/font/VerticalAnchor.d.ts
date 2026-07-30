import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class VerticalAnchor extends Enum<VerticalAnchor> implements Tagged {
    static BOTTOM: VerticalAnchor;
    static Companion: Tagged$Companion;
    static MIDDLE: VerticalAnchor;
    static TOP: VerticalAnchor;
    static getEntries(): VerticalAnchor[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): VerticalAnchor;
    static values(): VerticalAnchor[];
    private constructor(tag: string)
    readonly tag: string;
    /**
     * @param y Anchor Y position
     * @param height Unscaled font height
     * @param scale Render scale
     * @returns Draw (top-left) Y position
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/VerticalAnchor.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/VerticalAnchor.kt:44}
     */
    anchorToDrawY(y: number, height: number, scale: number): number;
    name(): "TOP" | "MIDDLE" | "BOTTOM";
}