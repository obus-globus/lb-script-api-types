import type { GlTexture } from '../../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { Program } from '../../../../../net/irisshaders/iris/gl/program/Program.d.ts'
import type { ColorSpace } from '../../../../../net/irisshaders/iris/pathways/colorspace/ColorSpace.d.ts'
import type { ColorSpaceConverter } from '../../../../../net/irisshaders/iris/pathways/colorspace/ColorSpaceConverter.d.ts'
export class ColorSpaceFragmentConverter extends Object implements ColorSpaceConverter {
    constructor(arg0: number, arg1: number, arg2: ColorSpace)
    // private colorSpace: ColorSpace;
    // private framebuffer: GlFramebuffer;
    // private height: number;
    // private program: Program;
    // private swapTexture: number;
    // private target: GlTexture;
    // private width: number;
    process(arg0: GlTexture): void;
    rebuildProgram(arg0: number, arg1: number, arg2: ColorSpace): void;
}