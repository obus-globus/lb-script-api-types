import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RenderPass$UniformUploader extends Object{
    upload(name: string, buffer: GpuBufferSlice): void;
}