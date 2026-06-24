import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderTargetInterface } from '../../../../net/irisshaders/iris/mixinterface/RenderTargetInterface.d.ts'
import type { Blaze3dRenderTargetExt } from '../../../../net/irisshaders/iris/targets/Blaze3dRenderTargetExt.d.ts'
import type { CallbackInfo } from '../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
export abstract class RenderTarget extends Object implements RenderTargetInterface, Blaze3dRenderTargetExt {
    constructor(label: string, useDepth: boolean, format: GpuFormat)
    colorTexture: GpuTexture;
    colorTextureView: GpuTextureView;
    depthTexture: GpuTexture;
    depthTextureView: GpuTextureView;
    // private format: GpuFormat;
    height: number;
    // private iris$colorBufferVersion: number;
    // private iris$depthBufferVersion: number;
    // private label: string;
    useDepth: boolean;
    width: number;
    blitAndBlendToTexture(output: GpuTextureView, outputDepth: GpuTextureView): void;
    copyDepthFrom(source: RenderTarget): void;
    createBuffers(width: number, height: number): void;
    destroyBuffers(): void;
    getColorTexture(): GpuTexture;
    getColorTextureView(): GpuTextureView;
    getDepthTexture(): GpuTexture;
    getDepthTextureView(): GpuTextureView;
    iris$bindFramebuffer(): void;
    iris$getColorBufferVersion(): number;
    iris$getDepthBufferVersion(): number;
    // private iris$onBindFramebuffer(arg0: boolean, arg1: CallbackInfo): void;
    resize(width: number, height: number): void;
}