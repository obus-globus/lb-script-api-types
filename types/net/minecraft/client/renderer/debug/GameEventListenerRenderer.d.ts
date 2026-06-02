import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { GameEventListenerRenderer$ListenerVisitor } from '../../../../../net/minecraft/client/renderer/debug/GameEventListenerRenderer$ListenerVisitor.d.ts'
import type { DebugValueAccess } from '../../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GameEventListenerRenderer extends Object implements DebugRenderer$SimpleDebugRenderer {
    constructor()
    emitGizmos(camX: number, camY: number, camZ: number, debugValues: DebugValueAccess, frustum: Frustum, partialTicks: number): void;
    // private forEachListener(debugValues: DebugValueAccess, visitor: (param0: Vec3, param1: number) => void): void;
}