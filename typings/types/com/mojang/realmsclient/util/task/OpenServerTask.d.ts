import type { RealmsServer } from '../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class OpenServerTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(realmsServer: RealmsServer, returnScreen: Screen, join: boolean, minecraft: Minecraft)
    // private join: boolean;
    // private minecraft: Minecraft;
    // private returnScreen: Screen;
    // private serverData: RealmsServer;
    getTitle(): Component;
    run(): void;
}