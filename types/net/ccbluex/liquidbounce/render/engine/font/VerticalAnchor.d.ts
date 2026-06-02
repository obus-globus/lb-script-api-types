import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class VerticalAnchor extends Enum<VerticalAnchor> implements Tagged {
    static BOTTOM: VerticalAnchor;
    static Companion: Tagged$Companion;
    static MIDDLE: VerticalAnchor;
    static TOP: VerticalAnchor;
    static getEntries(): VerticalAnchor[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VerticalAnchor;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    /**
     * @param y Anchor Y position
     * @param height Unscaled font height
     * @param scale Render scale
     * @returns Draw (top-left) Y position
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/VerticalAnchor.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/VerticalAnchor.kt:38}
     */
    anchorToDrawY(y: number, height: number, scale: number): number;
    name(): "TOP" | "MIDDLE" | "BOTTOM";
}