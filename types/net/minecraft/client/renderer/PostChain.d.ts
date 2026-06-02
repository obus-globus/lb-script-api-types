import type { FrameGraphBuilder } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GraphicsResourceAllocator } from '../../../../com/mojang/blaze3d/resource/GraphicsResourceAllocator.d.ts'
import type { RenderTargetDescriptor } from '../../../../com/mojang/blaze3d/resource/RenderTargetDescriptor.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChain$TargetBundle } from '../../../../net/minecraft/client/renderer/PostChain$TargetBundle.d.ts'
import type { PostChainConfig } from '../../../../net/minecraft/client/renderer/PostChainConfig.d.ts'
import type { PostChainConfig$InternalTarget } from '../../../../net/minecraft/client/renderer/PostChainConfig$InternalTarget.d.ts'
import type { PostPass } from '../../../../net/minecraft/client/renderer/PostPass.d.ts'
import type { Projection } from '../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostChain extends Object implements AutoCloseable {
    static MAIN_TARGET_ID: Identifier;
    static load(paramconfig: PostChainConfig, paramtextureManager: TextureManager, paramallowedExternalTargets: Identifier[], paramid: Identifier, paramprojection: Projection, paramprojectionMatrixBuffer: ProjectionMatrixBuffer): PostChain;
    private constructor(passes: PostPass[], internalTargets: Map<Identifier, PostChainConfig$InternalTarget>, externalTargets: Identifier[], projection: Projection, projectionMatrixBuffer: ProjectionMatrixBuffer)
    // private externalTargets: Identifier[];
    // private internalTargets: Map<Identifier, PostChainConfig$InternalTarget>;
    passes: PostPass[];
    // private persistentTargets: Map<Identifier, RenderTarget>;
    // private projection: Projection;
    // private projectionMatrixBuffer: ProjectionMatrixBuffer;
    addToFrame(frame: FrameGraphBuilder, screenWidth: number, screenHeight: number, providedTargets: PostChain$TargetBundle): void;
    close(): void;
    // private getOrCreatePersistentTarget(id: Identifier, descriptor: RenderTargetDescriptor): RenderTarget;
    process(mainTarget: RenderTarget, resourceAllocator: GraphicsResourceAllocator): void;
}