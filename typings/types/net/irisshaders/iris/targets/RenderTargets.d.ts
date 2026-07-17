import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { DepthBufferFormat } from '../../../../net/irisshaders/iris/gl/texture/DepthBufferFormat.d.ts'
import type { DepthCopyStrategy } from '../../../../net/irisshaders/iris/gl/texture/DepthCopyStrategy.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { PackRenderTargetDirectives$RenderTargetSettings } from '../../../../net/irisshaders/iris/shaderpack/properties/PackRenderTargetDirectives$RenderTargetSettings.d.ts'
import type { RenderTarget } from '../../../../net/irisshaders/iris/targets/RenderTarget.d.ts'
export class RenderTargets extends Object {
    constructor(arg0: number, arg1: number, arg2: GpuTexture, arg3: number, arg4: DepthBufferFormat, arg5: JavaMap<number, PackRenderTargetDirectives$RenderTargetSettings>, arg6: PackDirectives)
    // private cachedDepthBufferVersion: number;
    // private cachedHeight: number;
    // private cachedWidth: number;
    // private copyStrategy: DepthCopyStrategy;
    // private currentDepthFormat: DepthBufferFormat;
    // private currentDepthTexture: GpuTexture;
    // private depthSourceFb: GlFramebuffer;
    // private destroyed: boolean;
    readonly fullClearRequired: boolean;
    // private handDepthDirty: boolean;
    // private noHand: GpuTexture;
    // private noHandDestFb: GlFramebuffer;
    // private noTranslucents: GpuTexture;
    // private noTranslucentsDestFb: GlFramebuffer;
    // private ownedFramebuffers: GlFramebuffer[];
    // private packDirectives: PackDirectives;
    // private targetSettingsMap: JavaMap<number, PackRenderTargetDirectives$RenderTargetSettings>;
    // private targets: RenderTarget[];
    // private translucentDepthDirty: boolean;
    copyPreHandDepth(): void;
    copyPreTranslucentDepth(): void;
    // private create(arg0: number): void;
    createClearFramebuffer(arg0: boolean, arg1: number[]): GlFramebuffer;
    createColorFramebuffer(arg0: number[], arg1: number[]): GlFramebuffer;
    createColorFramebufferWithDepth(arg0: number[], arg1: number[]): GlFramebuffer;
    createDHFramebuffer(arg0: number[], arg1: number[]): GlFramebuffer;
    // private createEmptyFramebuffer(): GlFramebuffer;
    createFramebufferWritingToAlt(arg0: number[]): GlFramebuffer;
    createFramebufferWritingToMain(arg0: number[]): GlFramebuffer;
    // private createFullFramebuffer(arg0: boolean, arg1: number[]): GlFramebuffer;
    createGbufferFramebuffer(arg0: number[], arg1: number[]): GlFramebuffer;
    createIfUnsure(arg0: number): void;
    destroy(): void;
    destroyFramebuffer(arg0: GlFramebuffer): void;
    get(arg0: number): RenderTarget;
    getCurrentHeight(): number;
    getCurrentWidth(): number;
    getDepthTexture(): GpuTexture;
    getDepthTextureNoHand(): GpuTexture;
    getDepthTextureNoTranslucents(): GpuTexture;
    getOrCreate(arg0: number): RenderTarget;
    getRenderTargetCount(): number;
    // private invert(arg0: number[], arg1: number[]): number[];
    isFullClearRequired(): boolean;
    onFullClear(): void;
    resizeIfNeeded(arg0: number, arg1: GpuTexture, arg2: number, arg3: number, arg4: DepthBufferFormat, arg5: PackDirectives): boolean;
}