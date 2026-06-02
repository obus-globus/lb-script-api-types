import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockContextHolder extends Object {
    constructor()
    readonly blockEmission: number;
    readonly blockId: number;
    readonly ignoreMidBlock: boolean;
    readonly localPosX: number;
    readonly localPosY: number;
    readonly localPosZ: number;
    // private oldId: number;
    readonly renderType: number;
    getBlockEmission(): number;
    getBlockId(): number;
    getLocalPosX(): number;
    getLocalPosY(): number;
    getLocalPosZ(): number;
    getRenderType(): number;
    ignoreMidBlock(): boolean;
    overrideBlock(arg0: number): void;
    restoreBlock(): void;
    setBlockData(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    setIgnoreMidBlock(arg0: boolean): void;
}