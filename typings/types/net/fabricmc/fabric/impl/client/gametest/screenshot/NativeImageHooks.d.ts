import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface NativeImageHooks extends Object{
    fabric_copyPixelsLuminance(): number[];
    fabric_copyPixelsRgb(): number[];
    fabric_isFullyOpaque(): boolean;
}