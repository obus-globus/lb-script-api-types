import type { GlTexture } from '../../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComputeProgram } from '../../../../../net/irisshaders/iris/gl/program/ComputeProgram.d.ts'
import type { ColorSpace } from '../../../../../net/irisshaders/iris/pathways/colorspace/ColorSpace.d.ts'
import type { ColorSpaceConverter } from '../../../../../net/irisshaders/iris/pathways/colorspace/ColorSpaceConverter.d.ts'
export class ColorSpaceComputeConverter extends Object implements ColorSpaceConverter {
    constructor(arg0: number, arg1: number, arg2: ColorSpace)
    // private colorSpace: ColorSpace;
    // private height: number;
    // private program: ComputeProgram;
    // private target: GlTexture;
    // private width: number;
    process(arg0: GlTexture): void;
    rebuildProgram(arg0: number, arg1: number, arg2: ColorSpace): void;
}