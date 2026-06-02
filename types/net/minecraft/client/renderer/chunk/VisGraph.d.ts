import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VisibilitySet } from '../../../../../net/minecraft/client/renderer/chunk/VisibilitySet.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class VisGraph extends Object {
    constructor()
    // private bitSet: BitSet;
    // private empty: number;
    // private addEdges(index: number, edges: Direction[]): void;
    // private floodFill(startIndex: number): Direction[];
    // private getNeighborIndexAtFace(index: number, direction: Direction): number;
    resolve(): VisibilitySet;
    setOpaque(pos: BlockPos): void;
}