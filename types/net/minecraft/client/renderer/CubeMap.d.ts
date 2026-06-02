import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Projection } from '../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class CubeMap extends Object implements AutoCloseable {
    constructor(base: Identifier)
    // private location: Identifier;
    // private projection: Projection;
    // private projectionMatrixUbo: ProjectionMatrixBuffer;
    // private vertexBuffer: GpuBuffer;
    close(): void;
    registerTextures(textureManager: TextureManager): void;
    render(rotXInDegrees: number, rotYInDegrees: number): void;
}