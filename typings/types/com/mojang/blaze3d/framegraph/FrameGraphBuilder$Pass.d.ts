import type { FrameGraphBuilder } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder.d.ts'
import type { FrameGraphBuilder$Handle } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$Handle.d.ts'
import type { FrameGraphBuilder$InternalVirtualResource } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder$InternalVirtualResource.d.ts'
import type { FramePass } from '../../../../com/mojang/blaze3d/framegraph/FramePass.d.ts'
import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FrameGraphBuilder$Pass extends Object implements FramePass {
    constructor(null_: FrameGraphBuilder, id: number, name: string)
    // private disableCulling: boolean;
    // private id: number;
    // private name: string;
    // private requiredPassIds: BitSet;
    // private requiredResourceIds: BitSet;
    // private resourcesToAcquire: FrameGraphBuilder$InternalVirtualResource<Object>[];
    // private resourcesToRelease: BitSet;
    // private task: () => void;
    // private writesFrom: FrameGraphBuilder$Handle<Object>[];
    // private _reads<T extends unknown>(handle: FrameGraphBuilder$Handle<T>): void;
    // private _readsAndWrites<T extends unknown>(handle: FrameGraphBuilder$Handle<T>): FrameGraphBuilder$Handle<T>;
    createsInternal<T extends unknown>(name: string, descriptor: ResourceDescriptor<T>): ResourceHandle<T>;
    disableCulling(): void;
    executes(task: () => void): void;
    // private markPassRequired(pass: FrameGraphBuilder$Pass): void;
    // private markResourceRequired<T extends unknown>(handle: FrameGraphBuilder$Handle<T>): void;
    reads<T extends unknown>(handle: ResourceHandle<T>): void;
    readsAndWrites<T extends unknown>(handle: ResourceHandle<T>): ResourceHandle<T>;
    requires(pass: FramePass): void;
    toString(): string;
}