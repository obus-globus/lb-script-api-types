import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { AvatarRenderer } from '../../../../../net/minecraft/client/renderer/entity/player/AvatarRenderer.d.ts'
import type { Avatar } from '../../../../../net/minecraft/world/entity/Avatar.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { PlayerModelType } from '../../../../../net/minecraft/world/entity/player/PlayerModelType.d.ts'
export class EntityRenderers extends Object {
    static createAvatarRenderers(paramcontext: EntityRendererProvider$Context): Map<PlayerModelType, AvatarRenderer<Avatar>>;
    static createEntityRenderers(paramcontext: EntityRendererProvider$Context): Map<EntityType<any>, EntityRenderer<any, any>>;
    static register(paramtype: EntityType<Entity>, paramrenderer: (param0: EntityRendererProvider$Context) => EntityRenderer<Entity, any>): void;
    static validateRegistrations(): boolean;
    constructor()
}