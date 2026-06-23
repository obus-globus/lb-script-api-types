import type { FrameGraphBuilder$Pass } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Pass.d.ts'
import type { FrameGraphBuilder$VirtualResource } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$VirtualResource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameGraphBuilder$ExternalResource<T extends unknown> extends FrameGraphBuilder$VirtualResource<T> {
    constructor(name: string, createdBy: FrameGraphBuilder$Pass, resource: T)
    // private resource: T;
    get(): T;
}