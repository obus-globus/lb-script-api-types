import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderSetup$TextureBinding extends Record {
    constructor(location: Identifier, sampler: () => GpuSampler)
    // private location: Identifier;
    // private sampler: () => GpuSampler;
    equals(o: Object | null): boolean;
    hashCode(): number;
    location(): Identifier;
    sampler(): () => GpuSampler;
    toString(): string;
}