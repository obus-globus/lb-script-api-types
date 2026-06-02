import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WindowHooks extends Object{
    fabric_focus(): void;
    fabric_getRealFramebufferHeight(): number;
    fabric_getRealFramebufferWidth(): number;
    fabric_getRealHeight(): number;
    fabric_getRealWidth(): number;
    fabric_resetSize(): void;
    fabric_resize(arg0: number, arg1: number): void;
}