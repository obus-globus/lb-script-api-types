import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class HorizontalAnchor extends Enum<HorizontalAnchor> implements Tagged {
    static CENTER: HorizontalAnchor;
    static Companion: Tagged$Companion;
    static END: HorizontalAnchor;
    static START: HorizontalAnchor;
    static getEntries(): HorizontalAnchor[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HorizontalAnchor;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    /**
     * @param x Anchor X position
     * @param width Unscaled text width
     * @param scale Render scale
     * @returns Draw (top-left) X position
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/HorizontalAnchor.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/HorizontalAnchor.kt:44}
     */
    anchorToDrawX(x: number, width: number, scale: number): number;
    name(): "START" | "CENTER" | "END";
}