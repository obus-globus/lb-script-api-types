import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GpuSampler extends Object implements AutoCloseable {
    constructor()
    close(): void;
    getAddressModeU(): AddressMode;
    getAddressModeV(): AddressMode;
    getMagFilter(): FilterMode;
    getMaxAnisotropy(): number;
    getMaxLod(): OptionalDouble;
    getMinFilter(): FilterMode;
}