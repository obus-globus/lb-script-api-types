import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface EntityRendererProvider<T extends Entity> extends Object{
    create(context: EntityRendererProvider$Context): EntityRenderer<T, Object>;
}