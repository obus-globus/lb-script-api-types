import type { UpdateChannel } from '../../../../../com/terraformersmc/modmenu/api/UpdateChannel.d.ts'
import type { UpdateInfo } from '../../../../../com/terraformersmc/modmenu/api/UpdateInfo.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ModrinthUpdateInfo extends Record implements UpdateInfo {
    constructor(projectId: string, versionId: string, versionNumber: string, getUpdateChannel: UpdateChannel)
    // private getUpdateChannel: UpdateChannel;
    // private projectId: string;
    // private versionId: string;
    // private versionNumber: string;
    equals(arg0: Object | null): boolean;
    getDownloadLink(): string;
    getUpdateChannel(): UpdateChannel;
    getUpdateMessage(): Component;
    getUpdateMessage(): Component;
    hashCode(): number;
    isUpdateAvailable(): boolean;
    projectId(): string;
    toString(): string;
    versionId(): string;
    versionNumber(): string;
}