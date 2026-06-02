import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { LightSectionDebugRenderer$SectionData } from '../../../../../net/minecraft/client/renderer/debug/LightSectionDebugRenderer$SectionData.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
export class LightSectionDebugRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor(minecraft: Minecraft, lightLayer: LightLayer)
    // private data: LightSectionDebugRenderer$SectionData;
    // private lastUpdateTime: Instant;
    // private lightLayer: LightLayer;
    // private minecraft: Minecraft;
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
}