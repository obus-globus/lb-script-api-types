import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityRendererProvider } from '../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
export class EntityRendererRegistryImpl extends Object {
    static register(paramarg0: EntityType<Object>, paramarg1: (param0: Object | null) => net.minecraft.client.renderer.entity.EntityRenderer<unknown, unknown>): void;
    static setup(paramarg0: (param0: Object | null, param1: Object | null) => void): void;
    private constructor()
}