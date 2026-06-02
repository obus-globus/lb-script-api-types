import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GlobalBlockPosition extends BlockPosition {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number)
    // private dimension: string;
    dimension(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}