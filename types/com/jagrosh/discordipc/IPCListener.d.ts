import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { IPCClient } from '../../../com/jagrosh/discordipc/IPCClient.d.ts'
import type { Packet } from '../../../com/jagrosh/discordipc/entities/Packet.d.ts'
import type { User } from '../../../com/jagrosh/discordipc/entities/User.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface IPCListener extends Object{
    onActivityJoin(arg0: IPCClient, arg1: string): void;
    onActivityJoinRequest(arg0: IPCClient, arg1: string, arg2: User): void;
    onActivitySpectate(arg0: IPCClient, arg1: string): void;
    onClose(arg0: IPCClient, arg1: JsonObject): void;
    onDisconnect(arg0: IPCClient, arg1: Throwable): void;
    onPacketReceived(arg0: IPCClient, arg1: Packet): void;
    onPacketSent(arg0: IPCClient, arg1: Packet): void;
    onReady(arg0: IPCClient): void;
}