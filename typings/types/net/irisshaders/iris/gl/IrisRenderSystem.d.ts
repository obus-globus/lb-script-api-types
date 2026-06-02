import type { GlDevice } from '../../../../com/mojang/blaze3d/opengl/GlDevice.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Vector3i } from '../../../../org/joml/Vector3i.d.ts'
export class IrisRenderSystem extends Object {
    static addUnswizzle(paramarg0: number): void;
    static backupAndDisableCullingState(paramarg0: boolean): void;
    static bindAttributeLocation(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static bindBuffer(paramarg0: number, paramarg1: number): void;
    static bindBufferBase(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static bindImageTexture(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static bindSamplerToUnit(paramarg0: number, paramarg1: number): void;
    static bindTextureForSetup(paramarg0: number, paramarg1: number): void;
    static bindTextureToUnit(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static blendFuncSeparatei(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static blitFramebuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number): void;
    static bufferData(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    static bufferStorage(paramarg0: number, paramarg1: number[], paramarg2: number): number;
    static bufferStorage(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static checkFramebufferStatus(paramarg0: number): number;
    static clearBufferSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number[]): void;
    static clearBufferfv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static clearBufferiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static clearBufferuiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static clearColor(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static copyImageSubData(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number, paramarg14: number): void;
    static copyTexImage2D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): void;
    static copyTexSubImage2D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    static createBuffers(): number;
    static createFramebuffer(): number;
    static createTexture(paramarg0: number): number;
    static deleteBuffers(paramarg0: number): void;
    static destroySampler(paramarg0: number): void;
    static detachShader(paramarg0: number, paramarg1: number): void;
    static disableBufferBlend(paramarg0: number): void;
    static dispatchCompute(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static dispatchCompute(paramarg0: Vector3i): void;
    static dispatchComputeIndirect(paramarg0: number): void;
    static drawBuffers(paramarg0: number, paramarg1: number[]): void;
    static enableBufferBlend(paramarg0: number): void;
    static framebufferTexture2D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static genBuffers(paramarg0: number[]): void;
    static genSampler(): number;
    static generateMipmaps(paramarg0: number, paramarg1: number): void;
    static getActiveUniform(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: IntBuffer): string;
    static getAttribLocation(paramarg0: number, paramarg1: string): number;
    static getFloatv(paramarg0: number, paramarg1: number[]): void;
    static getGlDevice(): GlDevice;
    static getIntegerv(paramarg0: number, paramarg1: number[]): void;
    static getMaxImageUnits(): number;
    static getProgramInfoLog(paramarg0: number): string;
    static getProgramiv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static getShaderInfoLog(paramarg0: number): string;
    static getStringi(paramarg0: number, paramarg1: number): string;
    static getTexParameteri(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getUniformBlockIndex(paramarg0: number, paramarg1: string): number;
    static getVRAM(): number;
    static initRenderer(): void;
    static memoryBarrier(paramarg0: number): void;
    static onProgramUse(): void;
    static overridePolygonMode(): void;
    static readBuffer(paramarg0: number, paramarg1: number): void;
    static readPixels(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number[]): void;
    static restoreCullingState(): void;
    static restorePlayerProjection(): void;
    static restorePolygonMode(): void;
    static restoreTexture(): void;
    static samplerParameterf(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static samplerParameteri(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static samplerParameteriv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static setPolygonMode(paramarg0: number): void;
    static setShadowProjection(paramarg0: Matrix4f): void;
    static supportsBufferBlending(): boolean;
    static supportsCompute(): boolean;
    static supportsImageLoadStore(): boolean;
    static supportsSSBO(): boolean;
    static supportsTesselation(): boolean;
    static texImage1D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: ByteBuffer): void;
    static texImage2D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: ByteBuffer): void;
    static texImage3D(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: ByteBuffer): void;
    static texParameterf(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static texParameteri(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static texParameteriv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static texParameterivDirect(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static unbindAllSamplers(): void;
    static uniform1f(paramarg0: number, paramarg1: number): void;
    static uniform2f(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static uniform2i(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static uniform3f(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static uniform3i(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static uniform4f(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static uniform4i(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static uniformBlockBinding(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static uniformMatrix3fv(paramarg0: number, paramarg1: boolean, paramarg2: number[]): void;
    static uniformMatrix3fv(paramarg0: number, paramarg1: boolean, paramarg2: FloatBuffer): void;
    static uniformMatrix4fv(paramarg0: number, paramarg1: boolean, paramarg2: number[]): void;
    static uniformMatrix4fv(paramarg0: number, paramarg1: boolean, paramarg2: FloatBuffer): void;
    static vertexAttrib4f(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}