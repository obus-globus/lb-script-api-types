import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockCuller$Owner } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/BlockCuller$Owner.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class BlockCuller extends Object {
// (invalid TS: name contains '-')     static box-impl(paramarg0: BlockCuller$Owner): BlockCuller;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: BlockCuller$Owner): BlockCuller$Owner;
// (invalid TS: name contains '-')     static equals-impl(other: Object | null): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: BlockCuller$Owner, paramarg1: BlockCuller$Owner): boolean;
// (invalid TS: name contains '-')     static getCullData-impl(pos: number): number;
// (invalid TS: name contains '-')     static hashCode-impl(): number;
// (invalid TS: name contains '-')     static toString-impl(): string;
    constructor(owner: BlockCuller$Owner)
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/BlockCuller.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/placement/BlockCuller.kt:74}
     */
    getCullData(pos: number): number;
    hashCode(): number;
    toString(): string;
}