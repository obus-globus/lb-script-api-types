import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface VertexEncoderInterface extends Object{
    beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    overrideBlock(arg0: number): void;
    restoreBlock(): void;
}