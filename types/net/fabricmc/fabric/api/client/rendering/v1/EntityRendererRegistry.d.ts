import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityRendererProvider } from '../../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityRendererRegistry extends Object {
    static register(paramarg0: EntityType<Object>, paramarg1: (param0: Object | null) => net.minecraft.client.renderer.entity.EntityRenderer<unknown, unknown>): void;
    private constructor()
}