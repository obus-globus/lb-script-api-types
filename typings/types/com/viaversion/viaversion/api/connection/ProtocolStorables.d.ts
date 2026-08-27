import type { EntityTracker } from '../../../../../com/viaversion/viaversion/api/data/entity/EntityTracker.d.ts'
import type { ItemHasher } from '../../../../../com/viaversion/viaversion/api/data/item/ItemHasher.d.ts'
import type { ClientWorld } from '../../../../../com/viaversion/viaversion/api/minecraft/ClientWorld.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ProtocolStorables extends Object{
    clientWorld(): ClientWorld;
    entityTracker(): EntityTracker;
    itemHasher(): ItemHasher;
    setClientWorld(arg0: ClientWorld): void;
    setEntityTracker(arg0: EntityTracker): void;
    setItemHasher(arg0: ItemHasher): void;
}