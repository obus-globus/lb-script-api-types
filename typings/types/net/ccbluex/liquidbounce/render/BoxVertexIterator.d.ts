import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { BoxVertexIterator$BoxVertexConsumer } from '../../../../net/ccbluex/liquidbounce/render/BoxVertexIterator$BoxVertexConsumer.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class BoxVertexIterator extends Enum<BoxVertexIterator> {
    static FACE: BoxVertexIterator;
    static OUTLINE: BoxVertexIterator;
    static getEntries(): BoxVertexIterator[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BoxVertexIterator;
    static values(): (Object | null)[];
    private constructor()
    /**
     * For Java and JS usage.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/render/BoxVertexIterator.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/render/BoxVertexIterator.kt:58}
     */
    forEachVertex(box: AABB, consumer: BoxVertexIterator$BoxVertexConsumer): void;
    /**
     * For {@link drawBox}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/render/BoxVertexIterator.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/render/BoxVertexIterator.kt:63}
     */
    sideMask(sides: Direction[]): number;
    sideMask(side: Direction): number;
    name(): "FACE" | "OUTLINE";
}