import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockEntity } from '../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface ClientBlockEntityEvents$Load extends Object{
    onLoad(arg0: BlockEntity, arg1: ClientLevel): void;
}