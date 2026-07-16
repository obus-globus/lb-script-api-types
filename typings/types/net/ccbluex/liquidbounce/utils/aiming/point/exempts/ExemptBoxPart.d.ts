import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ExemptContext } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptContext.d.ts'
import type { ExemptPoint } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptPoint.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ExemptBoxPart extends Enum<ExemptBoxPart> implements Tagged, ExemptPoint {
    static BODY: ExemptBoxPart;
    static Companion: Tagged$Companion;
    static FEET: ExemptBoxPart;
    static HEAD: ExemptBoxPart;
    static getEntries(): ExemptBoxPart[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExemptBoxPart;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    /**
     * Check if this part of the box is higher than the other by the index of the enum.
     * So please DO NOT change the order of the enum.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptBoxPart.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptBoxPart.kt:62}
     */
    isHigherThan(other: ExemptBoxPart): boolean;
    predicate(context: ExemptContext, point: Vec3): boolean;
    name(): "HEAD" | "BODY" | "FEET";
}