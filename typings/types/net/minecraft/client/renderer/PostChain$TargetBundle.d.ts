import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface PostChain$TargetBundle extends Object{
    get(id: Identifier): ResourceHandle<RenderTarget>;
    getOrThrow(id: Identifier): ResourceHandle<RenderTarget>;
    replace(id: Identifier, handle: ResourceHandle<RenderTarget>): void;
}