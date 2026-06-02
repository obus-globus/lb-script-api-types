import type { UpdateChannel } from '../../../../com/terraformersmc/modmenu/api/UpdateChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export interface UpdateInfo extends Object{
    getDownloadLink(): string;
    getUpdateChannel(): UpdateChannel;
    getUpdateMessage(): Component;
    isUpdateAvailable(): boolean;
}