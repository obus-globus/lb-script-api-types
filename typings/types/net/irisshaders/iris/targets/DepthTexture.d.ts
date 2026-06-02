import type { GlResource } from '../../../../net/irisshaders/iris/gl/GlResource.d.ts'
import type { DepthBufferFormat } from '../../../../net/irisshaders/iris/gl/texture/DepthBufferFormat.d.ts'
export class DepthTexture extends GlResource {
    constructor(arg0: string, arg1: number, arg2: number, arg3: DepthBufferFormat)
    destroyInternal(): void;
    getTextureId(): number;
    resize(arg0: number, arg1: number, arg2: DepthBufferFormat): void;
}