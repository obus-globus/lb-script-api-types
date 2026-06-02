import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockCuller$Owner } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/BlockCuller$Owner.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class BlockCuller extends Object {
//     static box-impl(paramarg0: BlockCuller$Owner): BlockCuller;
 // ; invalid because of -//     static constructor-impl(paramarg0: BlockCuller$Owner): BlockCuller$Owner;
 // ; invalid because of -//     static equals-impl(paramarg0: BlockCuller$Owner, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: BlockCuller$Owner, paramarg1: BlockCuller$Owner): boolean;
 // ; invalid because of -//     static getCullData-impl(paramarg0: BlockCuller$Owner, paramarg1: number): number;
 // ; invalid because of -//     static hashCode-impl(paramarg0: BlockCuller$Owner): number;
 // ; invalid because of -//     static toString-impl(paramarg0: BlockCuller$Owner): string;
 // ; invalid because of -    constructor(owner: BlockCuller$Owner)
    readonly owner: BlockCuller$Owner;
    // private contains(pos: number, direction: Direction): boolean;
    // private contains(pos: number, direction1: Direction, direction2: Direction): boolean;
    // private cullEdge(currentData: number, direction1Present: boolean, direction2Present: boolean, diagonalPresent: boolean, mask: number): number;
    // private cullSide(currentData: number, directionPresent: boolean, mask: number): number;
    equals(other: Object | null): boolean;
    /**
     * Returns a long that stores in the first 32 bits what vertices are to be rendered for the faces and
     * in the other half what vertices are to be rendered for the outline.
     *
     * @param pos The position of the block, in long value.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/BlockCuller.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/BlockCuller.kt:68}
     */
    getCullData(pos: number): number;
    hashCode(): number;
    toString(): string;
}