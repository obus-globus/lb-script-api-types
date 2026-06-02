import type { GlStateManager$BlendState } from '../../../../com/mojang/blaze3d/opengl/GlStateManager$BlendState.d.ts'
import type { GlStateManager$DepthState } from '../../../../com/mojang/blaze3d/opengl/GlStateManager$DepthState.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { GlStateManagerAccessor } from '../../../../net/irisshaders/iris/mixin/GlStateManagerAccessor.d.ts'
export class GlStateManager extends Object implements GlStateManagerAccessor {
    static _activeTexture(paramtexture: number): void;
    static _bindTexture(paramid: number): void;
    static _blendFuncSeparate(paramsrcRgb: number, paramdstRgb: number, paramsrcAlpha: number, paramdstAlpha: number): void;
    static _clear(parammask: number): void;
    static _colorMask(paramwriteMask: number): void;
    static _deleteTexture(paramid: number): void;
    static _depthFunc(paramfunc: number): void;
    static _depthMask(parammask: boolean): void;
    static _disableBlend(): void;
    static _disableColorLogicOp(): void;
    static _disableCull(): void;
    static _disableDepthTest(): void;
    static _disablePolygonOffset(): void;
    static _disableScissorTest(): void;
    static _drawArrays(parammode: number, paramfirst: number, paramcount: number): void;
    static _drawElements(parammode: number, paramcount: number, paramtype: number, paramindices: number): void;
    static _enableBlend(): void;
    static _enableColorLogicOp(): void;
    static _enableCull(): void;
    static _enableDepthTest(): void;
    static _enablePolygonOffset(): void;
    static _enableScissorTest(): void;
    static _enableVertexAttribArray(paramindex: number): void;
    static _genTexture(): number;
    static _getError(): number;
    static _getInteger(paramname: number): number;
    static _getString(paramid: number): string;
    static _getTexLevelParameter(paramtarget: number, paramlevel: number, paramname: number): number;
    static _glBindAttribLocation(paramprogram: number, paramlocation: number, paramname: CharSequence): void;
    static _glBindBuffer(paramtarget: number, parambuffer: number): void;
    static _glBindFramebuffer(paramtarget: number, paramframebuffer: number): void;
    static _glBindVertexArray(paramarrayId: number): void;
    static _glBlitFrameBuffer(paramsrcX0: number, paramsrcY0: number, paramsrcX1: number, paramsrcY1: number, paramdstX0: number, paramdstY0: number, paramdstX1: number, paramdstY1: number, parammask: number, paramfilter: number): void;
    static _glBufferData(paramtarget: number, paramdata: ByteBuffer, paramusage: number): void;
    static _glBufferData(paramtarget: number, paramsize: number, paramusage: number): void;
    static _glBufferSubData(paramtarget: number, paramoffset: number, paramdata: ByteBuffer): void;
    static _glClientWaitSync(paramsync: number, paramflags: number, paramtimeout: number): number;
    static _glDeleteBuffers(parambuffer: number): void;
    static _glDeleteFramebuffers(paramframebuffer: number): void;
    static _glDeleteSync(paramsync: number): void;
    static _glFenceSync(paramcondition: number, paramflags: number): number;
    static _glFramebufferTexture2D(paramtarget: number, paramattachment: number, paramtextarget: number, paramtexture: number, paramlevel: number): void;
    static _glGenBuffers(): number;
    static _glGenVertexArrays(): number;
    static _glGetUniformLocation(paramprogram: number, paramname: CharSequence): number;
    static _glMapBufferRange(paramtarget: number, paramoffset: number, paramlength: number, paramaccess: number): ByteBuffer;
    static _glUniform1i(paramlocation: number, paramv0: number): void;
    static _glUnmapBuffer(paramtarget: number): void;
    static _glUseProgram(paramprogram: number): void;
    static _logicOp(paramop: number): void;
    static _pixelStore(paramname: number, paramvalue: number): void;
    static _polygonMode(paramface: number, parammode: number): void;
    static _polygonOffset(paramfactor: number, paramunits: number): void;
    static _readPixels(paramx: number, paramy: number, paramwidth: number, paramheight: number, paramformat: number, paramtype: number, parampixels: number): void;
    static _scissorBox(paramx: number, paramy: number, paramwidth: number, paramheight: number): void;
    static _texImage2D(paramtarget: number, paramlevel: number, paraminternalformat: number, paramwidth: number, paramheight: number, paramborder: number, paramformat: number, paramtype: number, parampixels: ByteBuffer): void;
    static _texParameter(paramtarget: number, paramname: number, paramvalue: number): void;
    static _texSubImage2D(paramtarget: number, paramlevel: number, paramxoffset: number, paramyoffset: number, paramwidth: number, paramheight: number, paramformat: number, paramtype: number, parampixels: ByteBuffer): void;
    static _texSubImage2D(paramtarget: number, paramlevel: number, paramxoffset: number, paramyoffset: number, paramwidth: number, paramheight: number, paramformat: number, paramtype: number, parampixels: number): void;
    static _vertexAttribIPointer(paramindex: number, paramsize: number, paramtype: number, paramstride: number, paramvalue: number): void;
    static _vertexAttribPointer(paramindex: number, paramsize: number, paramtype: number, paramnormalized: boolean, paramstride: number, paramvalue: number): void;
    static _viewport(paramx: number, paramy: number, paramwidth: number, paramheight: number): void;
    static clearGlErrors(): void;
    static getActiveTexture(): number;
    static getBLEND(): GlStateManager$BlendState;
    static getCOLOR_MASK(): number;
    static getDEPTH(): GlStateManager$DepthState;
    static getFrameBuffer(paramtarget: number): number;
    static getTEXTURES(): (Object | null)[];
    static glAttachShader(paramprogram: number, paramshader: number): void;
    static glBlendFuncSeparate(paramsrcColor: number, paramdstColor: number, paramsrcAlpha: number, paramdstAlpha: number): void;
    static glCompileShader(paramshader: number): void;
    static glCreateProgram(): number;
    static glCreateShader(paramtype: number): number;
    static glDeleteProgram(paramprogram: number): void;
    static glDeleteShader(paramshader: number): void;
    static glGenFramebuffers(): number;
    static glGetProgramInfoLog(paramprogram: number, parammaxLength: number): string;
    static glGetProgrami(paramprogram: number, parampname: number): number;
    static glGetShaderInfoLog(paramshader: number, parammaxLength: number): string;
    static glGetShaderi(paramshader: number, parampname: number): number;
    static glLinkProgram(paramprogram: number): void;
    static glShaderSource(paramshader: number, paramsource: string): void;
    constructor()
}