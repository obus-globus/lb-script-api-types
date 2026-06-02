import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export interface ServerBlockEntityEvents$Load extends Object{
    onLoad(arg0: BlockEntity, arg1: ServerLevel): void;
}