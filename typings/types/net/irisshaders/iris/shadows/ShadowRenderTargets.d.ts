import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { GlSampler } from '../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { InternalTextureFormat } from '../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { PackShadowDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackShadowDirectives.d.ts'
import type { RenderTarget } from '../../../../net/irisshaders/iris/targets/RenderTarget.d.ts'
export class ShadowRenderTargets extends Object {
    static log2(paramarg0: number): number;
    constructor(arg0: WorldRenderingPipeline, arg1: number, arg2: PackShadowDirectives)
    readonly buffersToBeCleared: (Object | null)[];
    readonly depthSourceFb: GlFramebuffer;
    // private flipped: (Object | null)[];
    // private formats: InternalTextureFormat[];
    readonly fullClearRequired: boolean;
    // private hardwareFiltered: (Object | null)[];
    // private linearFiltered: (Object | null)[];
    // private mainDepth: GpuTexture;
    // private mipped: (Object | null)[];
    // private noTranslucents: GpuTexture;
    // private noTranslucentsDestFb: GlFramebuffer;
    // private ownedFramebuffers: GlFramebuffer[];
    readonly resolution: number;
    // private shadowDirectives: PackShadowDirectives;
    // private size: number;
    // private targets: RenderTarget[];
    // private translucentDepthDirty: boolean;
    copyPreTranslucentDepth(): void;
    // private create(arg0: number): void;
    createColorFramebuffer(arg0: number[], arg1: number[]): GlFramebuffer;
    createColorFramebufferWithDepth(arg0: number[], arg1: number[]): GlFramebuffer;
    createDHFramebuffer(arg0: number[], arg1: number[]): GlFramebuffer;
    // private createEmptyFramebuffer(): GlFramebuffer;
    createFramebufferWritingToAlt(arg0: number[]): GlFramebuffer;
    createFramebufferWritingToMain(arg0: number[]): GlFramebuffer;
    // private createFullFramebuffer(arg0: boolean, arg1: number[]): GlFramebuffer;
    createIfEmpty(arg0: number): void;
    createShadowFramebuffer(arg0: number[], arg1: number[]): GlFramebuffer;
    destroy(): void;
    flip(arg0: number): void;
    get(arg0: number): RenderTarget;
    getBuffersToBeCleared(): (Object | null)[];
    getColorTextureFormat(arg0: number): InternalTextureFormat;
    getColorTextureId(arg0: number): number;
    getDepthSourceFb(): GlFramebuffer;
    getDepthTexture(): GpuTexture;
    getDepthTextureNoTranslucents(): GpuTexture;
    getNumColorTextures(): number;
    getOrCreate(arg0: number): RenderTarget;
    getRenderTargetCount(): number;
    getResolution(): number;
    getSamplerFor(arg0: number): GlSampler;
    // private invert(arg0: number[], arg1: number[]): number[];
    isFlipped(arg0: number): boolean;
    isFullClearRequired(): boolean;
    isHardwareFiltered(arg0: number): boolean;
    onFullClear(): void;
    snapshot(): number[];
}