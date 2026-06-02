import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SamplerCache extends Object {
    constructor()
    // private samplers: GpuSampler[];
    close(): void;
    getClampToEdge(minMag: FilterMode): GpuSampler;
    getClampToEdge(minMag: FilterMode, mipmaps: boolean): GpuSampler;
    getRepeat(minMag: FilterMode): GpuSampler;
    getRepeat(minMag: FilterMode, mipmaps: boolean): GpuSampler;
    getSampler(addressModeU: AddressMode, addressModeV: AddressMode, minFilter: FilterMode, magFilter: FilterMode, useMipmaps: boolean): GpuSampler;
    initialize(): void;
}