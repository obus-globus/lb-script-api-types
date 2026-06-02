import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BlockSensitiveBufferBuilder extends Object{
    beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    endBlock(): void;
    ignoreMidBlock(arg0: boolean): void;
    overrideBlock(arg0: number): void;
    restoreBlock(): void;
}