import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GlDebugLabel } from '../../../../com/mojang/blaze3d/opengl/GlDebugLabel.d.ts'
import type { VertexArrayCache } from '../../../../com/mojang/blaze3d/opengl/VertexArrayCache.d.ts'
import type { VertexArrayCache$VertexArray } from '../../../../com/mojang/blaze3d/opengl/VertexArrayCache$VertexArray.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { GLCapabilities } from '../../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export class VertexArrayCache$Emulated extends VertexArrayCache {
    static create(paramcapabilities: GLCapabilities, paramdebugLabels: GlDebugLabel, paramenabledExtensions: string[]): VertexArrayCache;
    constructor(debugLabels: GlDebugLabel)
    // private cache: JavaMap<VertexFormat[], VertexArrayCache$VertexArray>;
    // private debugLabels: GlDebugLabel;
    bindVertexArray(vertexBindings: VertexFormat[], vertexBuffers: GpuBufferSlice[], lastBoundVertexArray: VertexArrayCache$VertexArray): VertexArrayCache$VertexArray;
}