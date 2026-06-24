import type { GlBuffer } from '../../../../com/mojang/blaze3d/opengl/GlBuffer.d.ts'
import type { GlDebugLabel } from '../../../../com/mojang/blaze3d/opengl/GlDebugLabel.d.ts'
import type { GlProgram } from '../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { GlShaderModule } from '../../../../com/mojang/blaze3d/opengl/GlShaderModule.d.ts'
import type { GlTexture } from '../../../../com/mojang/blaze3d/opengl/GlTexture.d.ts'
import type { VertexArrayCache$VertexArray } from '../../../../com/mojang/blaze3d/opengl/VertexArrayCache$VertexArray.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { GLCapabilities } from '../../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export class GlDebugLabel$Ext extends GlDebugLabel {
    static create(paramcaps: GLCapabilities, paramwantsLabels: boolean, paramenabledExtensions: string[]): GlDebugLabel;
    private constructor()
    applyLabel(buffer: GlBuffer, label: () => string): void;
    applyLabel(program: GlProgram): void;
    applyLabel(shaderModule: GlShaderModule): void;
    applyLabel(texture: GlTexture): void;
    applyLabel(vertexArray: VertexArrayCache$VertexArray): void;
    exists(): boolean;
}