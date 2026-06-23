import type { CrossFrameResourcePool$ResourceEntry } from '../../../../com/mojang/blaze3d/resource/CrossFrameResourcePool$ResourceEntry.d.ts'
import type { GraphicsResourceAllocator } from '../../../../com/mojang/blaze3d/resource/GraphicsResourceAllocator.d.ts'
import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CrossFrameResourcePool extends Object implements GraphicsResourceAllocator, AutoCloseable {
    static UNPOOLED: GraphicsResourceAllocator;
    constructor(framesToKeepResource: number)
    // private framesToKeepResource: number;
    // private pool: CrossFrameResourcePool$ResourceEntry<Object>[];
    acquire<T extends unknown>(descriptor: ResourceDescriptor<T>): T;
    // private acquireWithoutPreparing<T extends unknown>(descriptor: ResourceDescriptor<T>): T;
    clear(): void;
    close(): void;
    endFrame(): void;
    entries(): CrossFrameResourcePool$ResourceEntry<Object>[];
    release<T extends unknown>(descriptor: ResourceDescriptor<T>, resource: T): void;
}