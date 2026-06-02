import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface ServerBlockEntityEvents$Unload extends Object{
    onUnload(arg0: BlockEntity, arg1: ServerLevel): void;
}