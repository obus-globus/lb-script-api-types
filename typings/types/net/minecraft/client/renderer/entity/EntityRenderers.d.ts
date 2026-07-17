import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientAvatarEntity } from '../../../../../net/minecraft/client/entity/ClientAvatarEntity.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { AvatarRenderer } from '../../../../../net/minecraft/client/renderer/entity/player/AvatarRenderer.d.ts'
import type { Avatar } from '../../../../../net/minecraft/world/entity/Avatar.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { PlayerModelType } from '../../../../../net/minecraft/world/entity/player/PlayerModelType.d.ts'
export class EntityRenderers extends Object {
    static createAvatarRenderers<T extends Avatar & ClientAvatarEntity>(paramcontext: EntityRendererProvider$Context): JavaMap<PlayerModelType, AvatarRenderer<T>>;
    static createEntityRenderers(paramcontext: EntityRendererProvider$Context): JavaMap<EntityType<any>, EntityRenderer<any, any>>;
    static register<T extends Entity>(paramtype: EntityType<T>, paramrenderer: (param0: EntityRendererProvider$Context) => EntityRenderer<T, any>): void;
    static validateRegistrations(): boolean;
    constructor()
}