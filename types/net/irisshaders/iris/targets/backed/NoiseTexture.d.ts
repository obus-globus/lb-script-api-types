import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
export class NoiseTexture extends GlResource {
    constructor(arg0: number, arg1: number)
    // private height: number;
    // private width: number;
    destroyInternal(): void;
    // private generateNoise(): ByteBuffer;
    getTextureId(): number;
    resize(arg0: number, arg1: number, arg2: number): void;
}