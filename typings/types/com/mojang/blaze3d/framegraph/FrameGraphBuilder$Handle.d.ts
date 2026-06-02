import type { FrameGraphBuilder$Pass } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Pass.d.ts'
import type { FrameGraphBuilder$VirtualResource } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$VirtualResource.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameGraphBuilder$Handle<T extends Object | number | string | boolean> extends Object implements ResourceHandle<T> {
    static INVALID_HANDLE: ResourceHandle<Object>;
    static invalid(): ResourceHandle<Object>;
    private constructor(holder: FrameGraphBuilder$VirtualResource<T>, version: number, createdBy: FrameGraphBuilder$Pass)
    // private aliasedBy: FrameGraphBuilder$Handle<T>;
    // private createdBy: FrameGraphBuilder$Pass;
    // private holder: FrameGraphBuilder$VirtualResource<T>;
    // private readBy: BitSet;
    // private version: number;
    get(): T;
    toString(): string;
    // private writeAndAlias(pass: FrameGraphBuilder$Pass): FrameGraphBuilder$Handle<T>;
}