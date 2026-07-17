import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
export class GlFramebuffer extends GlResource {
    constructor()
    // private attachments: JavaMap<any, any>;
    // private hasDepthAttachment: boolean;
    // private maxColorAttachments: number;
    // private maxDrawBuffers: number;
    addColorAttachment(arg0: number, arg1: number): void;
    addDepthAttachment(arg0: GpuTexture): void;
    addDepthAttachmentBypass(arg0: number): void;
    bind(): void;
    bindAsDrawBuffer(): void;
    bindAsReadBuffer(): void;
    destroyInternal(): void;
    drawBuffers(arg0: number[]): void;
    getColorAttachment(arg0: number): number;
    getId(): number;
    getStatus(): number;
    hasDepthAttachment(): boolean;
    noDrawBuffers(): void;
    readBuffer(arg0: number): void;
}