import type { RealmsServer } from '../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class CloseServerTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(realmsServer: RealmsServer, configureWorldScreen: RealmsConfigureWorldScreen)
    // private configureScreen: RealmsConfigureWorldScreen;
    // private serverData: RealmsServer;
    getTitle(): Component;
    run(): void;
}