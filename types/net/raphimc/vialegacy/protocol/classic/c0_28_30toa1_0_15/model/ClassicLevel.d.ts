import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassicLevel extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number[])
    constructor(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: number[])
    // private blocks: number[];
    // private lightBlocking: number[];
    readonly sizeX: number;
    readonly sizeY: number;
    readonly sizeZ: number;
    calculateLight(arg0: number, arg1: number, arg2: number, arg3: number): void;
    getBlock(arg0: BlockPosition): number;
    getBlock(arg0: number, arg1: number, arg2: number): number;
    getSizeX(): number;
    getSizeY(): number;
    getSizeZ(): number;
    isInBounds(arg0: number, arg1: number, arg2: number): boolean;
    isLightBlocking(arg0: BlockPosition): boolean;
    isLightBlocking(arg0: number, arg1: number, arg2: number): boolean;
    isLit(arg0: BlockPosition): boolean;
    isLit(arg0: number, arg1: number, arg2: number): boolean;
    setBlock(arg0: BlockPosition, arg1: number): void;
    setBlock(arg0: number, arg1: number, arg2: number, arg3: number): void;
}