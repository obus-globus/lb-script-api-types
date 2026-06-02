import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class DownloadTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(realmId: number, slot: number, downloadName: string, lastScreen: Screen)
    // private downloadName: string;
    // private lastScreen: Screen;
    // private realmId: number;
    // private slot: number;
    getTitle(): Component;
    run(): void;
}