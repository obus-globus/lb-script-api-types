import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
export class SyncTasks extends Object {
    static PACKET_SYNC_IDENTIFIER: string;
    static executeSyncTask(paramarg0: (param0: RegistryFriendlyByteBuf) => void): string;
    static handleSyncTask(paramarg0: FriendlyByteBuf): void;
    static init(): void;
    constructor()
}