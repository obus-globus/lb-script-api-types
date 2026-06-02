import type { WorldTemplate } from '../../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { RealmsConfigureWorldScreen } from '../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsConfigureWorldScreen.d.ts'
import type { LongRunningTask } from '../../../../../com/mojang/realmsclient/util/task/LongRunningTask.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class SwitchMinigameTask extends LongRunningTask {
    static setScreen(paramscreen: Screen): void;
    constructor(realmId: number, worldTemplate: WorldTemplate, nextScreen: RealmsConfigureWorldScreen)
    // private nextScreen: RealmsConfigureWorldScreen;
    // private realmId: number;
    // private worldTemplate: WorldTemplate;
    getTitle(): Component;
    run(): void;
}