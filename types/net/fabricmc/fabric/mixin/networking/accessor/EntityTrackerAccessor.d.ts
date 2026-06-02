import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerPlayerConnection } from '../../../../../../net/minecraft/server/network/ServerPlayerConnection.d.ts'
export interface EntityTrackerAccessor extends Object{
    getSeenBy(): ServerPlayerConnection[];
}