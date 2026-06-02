import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class VisibilitySet extends Object {
    constructor()
    // private data: BitSet;
    add(directions: Direction[]): void;
    set(direction1: Direction, direction2: Direction, value: boolean): void;
    setAll(visible: boolean): void;
    toString(): string;
    visibilityBetween(direction1: Direction, direction2: Direction): boolean;
}