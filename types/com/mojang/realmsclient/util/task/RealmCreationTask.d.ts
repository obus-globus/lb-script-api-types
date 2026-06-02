import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmCreationTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(realmId: number, name: string, motd: string)
    // private motd: string;
    // private name: string;
    // private realmId: number;
    getTitle(): Component;
    run(): void;
}