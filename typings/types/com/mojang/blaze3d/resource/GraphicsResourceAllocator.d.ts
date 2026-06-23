import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GraphicsResourceAllocator extends Object{
    acquire<T extends unknown>(descriptor: ResourceDescriptor<T>): T;
    release<T extends unknown>(descriptor: ResourceDescriptor<T>, resource: T): void;
}