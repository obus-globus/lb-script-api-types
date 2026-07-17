import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { IPCClient } from '../../../../../com/jagrosh/discordipc/IPCClient.d.ts'
import type { IPCListener } from '../../../../../com/jagrosh/discordipc/IPCListener.d.ts'
import type { Callback } from '../../../../../com/jagrosh/discordipc/entities/Callback.d.ts'
import type { DiscordBuild } from '../../../../../com/jagrosh/discordipc/entities/DiscordBuild.d.ts'
import type { Packet } from '../../../../../com/jagrosh/discordipc/entities/Packet.d.ts'
import type { Packet$OpCode } from '../../../../../com/jagrosh/discordipc/entities/Packet$OpCode.d.ts'
import type { User } from '../../../../../com/jagrosh/discordipc/entities/User.d.ts'
import type { PipeStatus } from '../../../../../com/jagrosh/discordipc/entities/pipe/PipeStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Pipe extends Object {
    static openPipe(paramarg0: IPCClient, paramarg1: number, paramarg2: JavaMap<string, Callback>, ...paramarg3: DiscordBuild[]): Pipe;
    constructor(arg0: IPCClient, arg1: JavaMap<string, Callback>)
    // private build: DiscordBuild;
    // private callbacks: JavaMap<string, Callback>;
    readonly currentUser: User;
    // private ipcClient: IPCClient;
    listener: IPCListener;
    status: PipeStatus;
    close(): void;
    getCurrentUser(): User;
    getDiscordBuild(): DiscordBuild;
    getStatus(): PipeStatus;
    read(): Packet;
    receive(arg0: Packet$OpCode, arg1: number[]): Packet;
    registerApp(arg0: string, arg1: string): void;
    registerSteamGame(arg0: string, arg1: string): void;
    send(arg0: Packet$OpCode, arg1: JsonObject): void;
    send(arg0: Packet$OpCode, arg1: JsonObject, arg2: Callback): void;
    setListener(arg0: IPCListener): void;
    setStatus(arg0: PipeStatus): void;
    write(arg0: number[]): void;
}