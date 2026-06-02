import type { RealmsJoinInformation } from '../../../../../com/mojang/realmsclient/dto/RealmsJoinInformation.d.ts'
import type { RealmsServer } from '../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsConnect } from '../../../../../net/minecraft/realms/RealmsConnect.d.ts'
export class ConnectTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(lastScreen: Screen, server: RealmsServer, address: RealmsJoinInformation)
    // private address: RealmsJoinInformation;
    // private realmsConnect: RealmsConnect;
    // private server: RealmsServer;
    abortTask(): void;
    getTitle(): Component;
    run(): void;
    tick(): void;
}