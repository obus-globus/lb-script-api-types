import type { RealmsClient } from '../../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class ResettingWorldTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(serverId: number, title: Component, callback: () => void)
    // private callback: () => void;
    // private serverId: number;
    readonly title: Component;
    getTitle(): Component;
    run(): void;
    sendResetRequest(client: RealmsClient, serverId: number): void;
}