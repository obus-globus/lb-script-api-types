import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerLifecycleEvents$SyncDataPackContents extends Object{
    onSyncDataPackContents(arg0: ServerPlayer, arg1: boolean): void;
}