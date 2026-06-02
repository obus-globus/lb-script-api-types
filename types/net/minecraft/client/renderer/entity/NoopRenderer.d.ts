import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class NoopRenderer<T extends Entity> extends EntityRenderer<T, EntityRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): EntityRenderState;
}