import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CacheSlot } from '../../../../net/minecraft/client/multiplayer/CacheSlot.d.ts'
export interface CacheSlot$Cleaner<C extends CacheSlot$Cleaner<C>> extends Object{
    registerForCleaning(slot: CacheSlot<C, Object>): void;
}