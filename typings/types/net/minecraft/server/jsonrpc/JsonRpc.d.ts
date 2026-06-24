import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DedicatedServerSettings } from '../../../../net/minecraft/server/dedicated/DedicatedServerSettings.d.ts'
import type { ManagementServer } from '../../../../net/minecraft/server/jsonrpc/ManagementServer.d.ts'
import type { NotificationManager } from '../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
export class JsonRpc extends Object {
    static create(paramsettings: DedicatedServerSettings, paramnotificationManager: NotificationManager): ManagementServer;
    constructor()
}