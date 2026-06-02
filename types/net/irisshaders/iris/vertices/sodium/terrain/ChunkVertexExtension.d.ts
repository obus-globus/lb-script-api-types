import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ChunkVertexExtension extends Object{
    getBlockEmission(): number;
    getBlockId(): number;
    getLocalPosX(): number;
    getLocalPosY(): number;
    getLocalPosZ(): number;
    getRenderType(): number;
    ignoreMidBlock(): boolean;
    iris$copyData(arg0: ChunkVertexExtension): void;
    iris$ignoresMidBlock(arg0: boolean): void;
    iris$setData(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}