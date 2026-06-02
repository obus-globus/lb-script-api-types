import type { FrameGraphBuilder$Handle } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Handle.d.ts'
import type { FrameGraphBuilder$Pass } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Pass.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FrameGraphBuilder$VirtualResource<T extends Object | number | string | boolean> extends Object {
    constructor(name: string, createdBy: FrameGraphBuilder$Pass)
    handle: FrameGraphBuilder$Handle<T>;
    name: string;
    get(): T;
    toString(): string;
}