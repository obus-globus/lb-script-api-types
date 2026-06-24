import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { ProjectionType } from '../../../../com/mojang/blaze3d/ProjectionType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { RenderPass } from '../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { RenderSystem$AutoStorageIndexBuffer } from '../../../../com/mojang/blaze3d/systems/RenderSystem$AutoStorageIndexBuffer.d.ts'
import type { SamplerCache } from '../../../../com/mojang/blaze3d/systems/SamplerCache.d.ts'
import type { ScissorState } from '../../../../com/mojang/blaze3d/systems/ScissorState.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicUniforms } from '../../../../net/minecraft/client/renderer/DynamicUniforms.d.ts'
import type { TimeSource$NanoTimeSource } from '../../../../net/minecraft/util/TimeSource$NanoTimeSource.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fStack } from '../../../../org/joml/Matrix4fStack.d.ts'
import type { GLFWErrorCallbackI } from '../../../../org/lwjgl/glfw/GLFWErrorCallbackI.d.ts'
export class RenderSystem extends Object {
    static DEFAULT_DEPTH_CLEAR_VALUE: number;
    static MINIMUM_ATLAS_TEXTURE_SIZE: number;
    static PROJECTION_MATRIX_UBO_SIZE: number;
    static outputColorTextureOverride: GpuTextureView;
    static outputDepthTextureOverride: GpuTextureView;
    static assertOnRenderThread(): void;
    static backupProjectionMatrix(): void;
    static bindDefaultUniforms(paramrenderPass: RenderPass): void;
    static disableScissorForRenderTypeDraws(): void;
    static enableScissorForRenderTypeDraws(paramx: number, paramy: number, paramwidth: number, paramheight: number): void;
    static executePendingTasks(): void;
    static getBackendDescription(): string;
    static getDevice(): GpuDevice;
    static getDynamicUniforms(): DynamicUniforms;
    static getGlobalSettingsUniform(): GpuBuffer;
    static getModelViewMatrixCopy(): Matrix4f;
    static getModelViewStack(): Matrix4fStack;
    static getProjectionMatrixBuffer(): GpuBufferSlice;
    static getProjectionType(): ProjectionType;
    static getSamplerCache(): SamplerCache;
    static getScissorStateForRenderTypeDraws(): ScissorState;
    static getSequentialBuffer(paramprimitiveTopology: PrimitiveTopology): RenderSystem$AutoStorageIndexBuffer;
    static getShaderFog(): GpuBufferSlice;
    static getShaderLights(): GpuBufferSlice;
    static initBackendSystem(): TimeSource$NanoTimeSource;
    static initRenderThread(): void;
    static initRenderer(paramdevice: GpuDevice): void;
    static isFrozenAtPollEvents(): boolean;
    static isOnRenderThread(): boolean;
    static pollEvents(): void;
    static queueFencedTask(paramtask: () => void): void;
    static restoreProjectionMatrix(): void;
    static setErrorCallback(paramonFullscreenError: (param0: number, param1: number) => void): void;
    static setGlobalSettingsUniform(parambuffer: GpuBuffer): void;
    static setProjectionMatrix(paramprojectionMatrixBuffer: GpuBufferSlice, paramtype: ProjectionType): void;
    static setShaderFog(paramfog: GpuBufferSlice): void;
    static setShaderLights(parambuffer: GpuBufferSlice): void;
    static setupDefaultState(): void;
    static shutdownRenderer(): void;
    static tryGetDevice(): GpuDevice;
    constructor()
}