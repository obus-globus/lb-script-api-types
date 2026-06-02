import type { Backup } from '../../../../../com/mojang/realmsclient/dto/Backup.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RestoreTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(backup: Backup, realmId: number, lastScreen: RealmsConfigureWorldScreen)
    // private backup: Backup;
    // private lastScreen: RealmsConfigureWorldScreen;
    // private realmId: number;
    getTitle(): Component;
    run(): void;
}