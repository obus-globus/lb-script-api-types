import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CrossFrameResourcePool$ResourceEntry<T extends unknown> extends Object implements AutoCloseable {
    private constructor(descriptor: ResourceDescriptor<T>, value: T, framesToLive: number)
    // private descriptor: ResourceDescriptor<T>;
    // private framesToLive: number;
    // private value: T;
    close(): void;
}