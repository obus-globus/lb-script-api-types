import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DebugRendererFactory } from '../../../../../../../../net/fabricmc/fabric/api/client/debug/v1/renderer/DebugRendererFactory.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { DebugSubscription } from '../../../../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class DebugRendererRegistry extends Object {
    static register(paramarg0: DebugSubscription<Object>, paramarg1: (param0: Minecraft) => net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer): void;
    static register(paramarg0: DebugSubscription<Object>, paramarg1: (param0: Minecraft) => net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer, paramarg2: boolean): void;
    constructor()
}