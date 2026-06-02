import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FramePass extends Object{
    createsInternal(name: string, descriptor: ResourceDescriptor<T>): ResourceHandle<T>;
    disableCulling(): void;
    executes(task: () => void): void;
    reads(handle: ResourceHandle<T>): void;
    readsAndWrites(handle: ResourceHandle<T>): ResourceHandle<T>;
    requires(pass: FramePass): void;
}