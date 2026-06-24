import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
export class BellModel$State extends Record {
    constructor(ticks: number, shakeDirection: Direction)
    // private shakeDirection: Direction;
    // private ticks: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    shakeDirection(): Direction;
    ticks(): number;
    toString(): string;
}