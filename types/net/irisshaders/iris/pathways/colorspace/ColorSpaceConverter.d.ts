import type { GlTexture } from '../../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ColorSpace } from '../../../../../net/irisshaders/iris/pathways/colorspace/ColorSpace.d.ts'
export interface ColorSpaceConverter extends Object{
    process(arg0: GlTexture): void;
    rebuildProgram(arg0: number, arg1: number, arg2: ColorSpace): void;
}