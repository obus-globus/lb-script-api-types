import type { FrameGraphBuilder$Pass } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Pass.d.ts'
import type { FrameGraphBuilder$VirtualResource } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$VirtualResource.d.ts'
import type { GraphicsResourceAllocator } from '../../../../com/mojang/blaze3d/resource/GraphicsResourceAllocator.d.ts'
import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameGraphBuilder$InternalVirtualResource<T extends Object | number | string | boolean> extends FrameGraphBuilder$VirtualResource<T> {
    constructor(id: number, name: string, createdBy: FrameGraphBuilder$Pass, descriptor: ResourceDescriptor<T>)
    // private descriptor: ResourceDescriptor<T>;
    // private id: number;
    // private physicalResource: T;
    acquire(allocator: GraphicsResourceAllocator): void;
    get(): T;
    release(allocator: GraphicsResourceAllocator): void;
}