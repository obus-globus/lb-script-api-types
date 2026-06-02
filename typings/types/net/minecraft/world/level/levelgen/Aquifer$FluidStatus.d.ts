import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class Aquifer$FluidStatus extends Record {
    // private fluidLevel: number;
    // private fluidType: BlockState;
    at(blockY: number): BlockState;
    equals(o: Object | null): boolean;
    fluidLevel(): number;
    fluidType(): BlockState;
    hashCode(): number;
    toString(): string;
}