import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DebugRendererFactory } from '../../../../../../../net/fabricmc/fabric/api/client/debug/v1/renderer/DebugRendererFactory.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { DebugSubscription } from '../../../../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class DebugRendererRegistryImpl$Entry extends Record {
    constructor(debugSubscription: DebugSubscription<Object>, rendererFactory: (param0: Minecraft) => net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer)
    // private debugSubscription: DebugSubscription<Object>;
    // private rendererFactory: (param0: Minecraft) => net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer;
    debugSubscription(): DebugSubscription<Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rendererFactory(): (param0: Minecraft) => net.minecraft.client.renderer.debug.DebugRenderer.SimpleDebugRenderer;
    toString(): string;
}