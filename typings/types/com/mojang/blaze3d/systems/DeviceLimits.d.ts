import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceLimits extends Record {
    constructor(maxAnisotropy: number, minUniformOffsetAlignment: number, maxTextureSize: number, maxMemoryAllocationSize: number, maxMultiDrawDirectInterleavedDrawCount: number, maxColorAttachments: number)
    // private maxAnisotropy: number;
    // private maxColorAttachments: number;
    // private maxMemoryAllocationSize: number;
    // private maxMultiDrawDirectInterleavedDrawCount: number;
    // private maxTextureSize: number;
    // private minUniformOffsetAlignment: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxAnisotropy(): number;
    maxColorAttachments(): number;
    maxMemoryAllocationSize(): number;
    maxMultiDrawDirectInterleavedDrawCount(): number;
    maxTextureSize(): number;
    maxTextureSizeForFormat(format: GpuFormat): number;
    minUniformOffsetAlignment(): number;
    toString(): string;
}