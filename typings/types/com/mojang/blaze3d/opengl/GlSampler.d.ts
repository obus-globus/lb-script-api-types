import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
export class GlSampler extends GpuSampler {
    constructor(addressModeU: AddressMode, addressModeV: AddressMode, minFilter: FilterMode, magFilter: FilterMode, maxAnisotropy: number, maxLod: OptionalDouble)
    readonly addressModeU: AddressMode;
    readonly addressModeV: AddressMode;
    readonly closed: boolean;
    readonly id: number;
    readonly magFilter: FilterMode;
    readonly maxAnisotropy: number;
    readonly maxLod: OptionalDouble;
    readonly minFilter: FilterMode;
    close(): void;
    getAddressModeU(): AddressMode;
    getAddressModeV(): AddressMode;
    getId(): number;
    getMagFilter(): FilterMode;
    getMaxAnisotropy(): number;
    getMaxLod(): OptionalDouble;
    getMinFilter(): FilterMode;
    isClosed(): boolean;
}