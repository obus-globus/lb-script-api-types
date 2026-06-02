import type { RealmsClient } from '../../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { WorldTemplate } from '../../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { ResettingWorldTask } from '../../../../../com/mojang/realmsclient/util/task/ResettingWorldTask.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ResettingTemplateWorldTask extends ResettingWorldTask {
    static setScreen(paramscreen: Screen): void;
    constructor(template: WorldTemplate, serverId: number, title: Component, callback: () => void)
    // private template: WorldTemplate;
    sendResetRequest(client: RealmsClient, serverId: number): void;
}