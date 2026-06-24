import type { GpuSurface$PresentMode } from '../../../../com/mojang/blaze3d/systems/GpuSurface$PresentMode.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuSurface$Configuration extends Record {
    constructor(width: number, height: number, presentMode: GpuSurface$PresentMode)
    // private height: number;
    // private presentMode: GpuSurface$PresentMode;
    // private width: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    presentMode(): GpuSurface$PresentMode;
    toString(): string;
    width(): number;
}