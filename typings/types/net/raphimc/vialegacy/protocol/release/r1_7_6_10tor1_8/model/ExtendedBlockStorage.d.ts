import type { NibbleArray } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/NibbleArray.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ExtendedBlockStorage extends Object {
    constructor(arg0: boolean)
    readonly blockLSBArray: number[];
    readonly blockLightArray: NibbleArray;
    // private blockMSBArray: NibbleArray;
    readonly blockMetadataArray: NibbleArray;
    readonly skyLightArray: NibbleArray;
    getBlockId(arg0: number, arg1: number, arg2: number): number;
    getBlockLSBArray(): number[];
    getBlockLight(arg0: number, arg1: number, arg2: number): number;
    getBlockLightArray(): NibbleArray;
    getBlockMetadata(arg0: number, arg1: number, arg2: number): number;
    getBlockMetadataArray(): NibbleArray;
    getOrCreateBlockMSBArray(): NibbleArray;
    getSkyLight(arg0: number, arg1: number, arg2: number): number;
    getSkyLightArray(): NibbleArray;
    hasBlockMSBArray(): boolean;
    setBlockId(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setBlockLight(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setBlockMetadata(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setSkyLight(arg0: number, arg1: number, arg2: number, arg3: number): void;
}