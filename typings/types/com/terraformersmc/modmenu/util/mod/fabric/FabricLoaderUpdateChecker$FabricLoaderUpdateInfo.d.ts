import type { UpdateChannel } from '../../../../../../com/terraformersmc/modmenu/api/UpdateChannel.d.ts'
import type { UpdateInfo } from '../../../../../../com/terraformersmc/modmenu/api/UpdateInfo.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class FabricLoaderUpdateChecker$FabricLoaderUpdateInfo extends Object implements UpdateInfo {
    private constructor(arg0: string, arg1: boolean)
    // private isStable: boolean;
    // private version: string;
    getDownloadLink(): string;
    getUpdateChannel(): UpdateChannel;
    getUpdateMessage(): Component;
    getUpdateMessage(): Component;
    isUpdateAvailable(): boolean;
}