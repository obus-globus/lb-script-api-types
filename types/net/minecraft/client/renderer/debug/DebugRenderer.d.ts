import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { DebugRenderer$SimpleDebugRenderer } from '../../../../../net/minecraft/client/renderer/debug/DebugRenderer$SimpleDebugRenderer.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class DebugRenderer extends Object {
    static getTargetedEntity(paramcameraEntity: Entity, parammaxTargetingRange: number): Optional<Entity>;
    constructor()
    // private lastDebugEntriesVersion: number;
    // private renderers: DebugRenderer$SimpleDebugRenderer[];
    emitGizmos(frustum: Frustum, camX: number, camY: number, camZ: number, partialTicks: number): void;
    refreshRendererList(): void;
}