import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface ClientEntityEvents$Unload extends Object{
    onUnload(arg0: Entity, arg1: ClientLevel): void;
}