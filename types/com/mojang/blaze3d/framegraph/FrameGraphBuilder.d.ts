import type { FrameGraphBuilder$ExternalResource } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$ExternalResource.d.ts'
import type { FrameGraphBuilder$Inspector } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Inspector.d.ts'
import type { FrameGraphBuilder$InternalVirtualResource } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$InternalVirtualResource.d.ts'
import type { FrameGraphBuilder$Pass } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Pass.d.ts'
import type { FramePass } from '../../../../com/mojang/blaze3d/framegraph/FramePass.d.ts'
import type { GraphicsResourceAllocator } from '../../../../com/mojang/blaze3d/resource/GraphicsResourceAllocator.d.ts'
import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameGraphBuilder extends Object {
    constructor()
    // private externalResources: FrameGraphBuilder$ExternalResource<Object>[];
    // private internalResources: FrameGraphBuilder$InternalVirtualResource<Object>[];
    // private passes: FrameGraphBuilder$Pass[];
    addPass(name: string): FramePass;
    // private assignResourceLifetimes(passesInOrder: E[]): void;
    createInternal(name: string, descriptor: ResourceDescriptor<T>): ResourceHandle<T>;
    // private createInternalResource(name: string, descriptor: ResourceDescriptor<T>, createdBy: FrameGraphBuilder$Pass): FrameGraphBuilder$InternalVirtualResource<T>;
    // private discoverAllRequiredPasses(sourcePass: FrameGraphBuilder$Pass, visited: BitSet, passesToTrace: FrameGraphBuilder$Pass[]): void;
    execute(resourceAllocator: GraphicsResourceAllocator): void;
    execute(resourceAllocator: GraphicsResourceAllocator, inspector: FrameGraphBuilder$Inspector): void;
    // private identifyPassesToKeep(): BitSet;
    importExternal<T extends Object | number | string | boolean>(name: string, resource: T): ResourceHandle<T>;
    // private resolvePassOrder(pass: FrameGraphBuilder$Pass, passesToFind: BitSet, visiting: BitSet, output: FrameGraphBuilder$Pass[]): void;
}