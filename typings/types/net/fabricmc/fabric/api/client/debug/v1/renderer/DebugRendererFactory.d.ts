import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
export interface DebugRendererFactory extends Object{
    create(arg0: Minecraft): DebugRenderer$SimpleDebugRenderer;
}