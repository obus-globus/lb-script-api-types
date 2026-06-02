import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GraphicsResourceAllocator extends Object{
    acquire<T extends Object | number | string | boolean>(descriptor: ResourceDescriptor<T>): T;
    release<T extends Object | number | string | boolean>(descriptor: ResourceDescriptor<T>, resource: T): void;
}