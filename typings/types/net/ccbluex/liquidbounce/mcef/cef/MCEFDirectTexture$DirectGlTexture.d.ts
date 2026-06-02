import type { GlTexture } from '../../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
export class MCEFDirectTexture$DirectGlTexture extends GlTexture {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_CUBEMAP_COMPATIBLE: number;
    static USAGE_RENDER_ATTACHMENT: number;
    static USAGE_TEXTURE_BINDING: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    // private ownsTexture: boolean;
    close(): void;
}