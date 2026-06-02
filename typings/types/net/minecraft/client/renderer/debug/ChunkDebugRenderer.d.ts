import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { ChunkDebugRenderer$ChunkData } from '../../../../../net/minecraft/client/renderer/debug/ChunkDebugRenderer$ChunkData.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
export class ChunkDebugRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor(minecraft: Minecraft)
    // private data: ChunkDebugRenderer$ChunkData;
    // private lastUpdateTime: number;
    // private minecraft: Minecraft;
    // private radius: number;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
}