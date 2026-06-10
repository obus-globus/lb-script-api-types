import type { ResourceDescriptor } from '../../../../com/mojang/blaze3d/resource/ResourceDescriptor.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FramePass extends Object {
    createsInternal<T extends Object | number | string | boolean>(name: string, descriptor: ResourceDescriptor<T>): ResourceHandle<T>;
    disableCulling(): void;
    executes(task: () => void): void;
    reads<T extends Object | number | string | boolean>(handle: ResourceHandle<T>): void;
    readsAndWrites<T extends Object | number | string | boolean>(handle: ResourceHandle<T>): ResourceHandle<T>;
    requires(pass: FramePass): void;
}