import type { RealmsServer } from '../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { ServerAddress } from '../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
import type { Connection } from '../../../net/minecraft/network/Connection.d.ts'
export class RealmsConnect extends Object {
    constructor(onlineScreen: Screen)
    // private aborted: boolean;
    // private connection: Connection;
    // private onlineScreen: Screen;
    abort(): void;
    connect(server: RealmsServer, hostAndPort: ServerAddress): void;
    tick(): void;
}