import type { NibbleArray } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/NibbleArray.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ExtendedBlockStorage extends Object {
    constructor(arg0: boolean)
    readonly blockLightArray: NibbleArray;
    readonly blockLsbArray: number[];
    readonly blockMetadataArray: NibbleArray;
    // private blockMsbArray: NibbleArray;
    readonly skyLightArray: NibbleArray;
    getBlockId(arg0: number, arg1: number, arg2: number): number;
    getBlockLight(arg0: number, arg1: number, arg2: number): number;
    getBlockLightArray(): NibbleArray;
    getBlockLsbArray(): number[];
    getBlockMetadata(arg0: number, arg1: number, arg2: number): number;
    getBlockMetadataArray(): NibbleArray;
    getOrCreateBlockMsbArray(): NibbleArray;
    getSkyLight(arg0: number, arg1: number, arg2: number): number;
    getSkyLightArray(): NibbleArray;
    hasBlockMsbArray(): boolean;
    setBlockId(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setBlockLight(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setBlockMetadata(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setSkyLight(arg0: number, arg1: number, arg2: number, arg3: number): void;
}