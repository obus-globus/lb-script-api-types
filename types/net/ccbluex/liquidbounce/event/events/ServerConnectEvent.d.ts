import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { ConnectScreen } from '../../../../../net/minecraft/client/gui/screens/ConnectScreen.d.ts'
import type { ServerData } from '../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { TransferState } from '../../../../../net/minecraft/client/multiplayer/TransferState.d.ts'
import type { ServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
export class ServerConnectEvent extends CancellableEvent {
    constructor(connectScreen: ConnectScreen, address: ServerAddress, serverInfo: ServerData, cookieStorage: TransferState | null)
    readonly address: ServerAddress;
    readonly connectScreen: ConnectScreen;
    readonly cookieStorage: TransferState | null;
    readonly serverInfo: ServerData;
}