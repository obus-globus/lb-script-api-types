import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityRenderer } from '../../../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider } from '../../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityRendererRegistry extends Object {
    static register<E extends Entity>(paramarg0: EntityType<E>, paramarg1: (param0: EntityRendererProvider$Context) => EntityRenderer<E, any>): void;
    private constructor()
}