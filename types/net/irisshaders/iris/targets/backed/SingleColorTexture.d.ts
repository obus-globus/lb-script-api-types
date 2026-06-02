import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
export class SingleColorTexture extends GlResource {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    destroyInternal(): void;
    getTextureId(): number;
}