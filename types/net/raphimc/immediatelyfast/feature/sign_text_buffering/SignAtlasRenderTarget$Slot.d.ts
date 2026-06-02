import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SignAtlasRenderTarget$Slot extends Object {
    constructor(null_: SignAtlasRenderTarget$Slot, arg1: SignAtlasRenderTarget$Slot, arg2: number, arg3: number, arg4: number, arg5: number)
    height: number;
    occupied: boolean;
    parentSlot: SignAtlasRenderTarget$Slot;
    subSlot1: SignAtlasRenderTarget$Slot;
    subSlot2: SignAtlasRenderTarget$Slot;
    width: number;
    x: number;
    y: number;
    findSlot(arg0: number, arg1: number): SignAtlasRenderTarget$Slot;
    markFree(): void;
}