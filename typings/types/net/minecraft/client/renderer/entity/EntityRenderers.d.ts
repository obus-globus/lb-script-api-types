import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRendererProvider } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { PlayerModelType } from '../../../../../net/minecraft/world/entity/player/PlayerModelType.d.ts'
export class EntityRenderers extends Object {
    static createAvatarRenderers(paramcontext: EntityRendererProvider$Context): { [key in PlayerModelType]: Object | null };
    static createEntityRenderers(paramcontext: EntityRendererProvider$Context): Map<Object | null, Object | null>;
    static register(paramtype: EntityType<Object>, paramrenderer: (param0: Object | null) => net.minecraft.client.renderer.entity.EntityRenderer<unknown, unknown>): void;
    static validateRegistrations(): boolean;
    constructor()
}