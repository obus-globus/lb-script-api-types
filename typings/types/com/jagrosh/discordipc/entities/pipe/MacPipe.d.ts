import type { IPCClient } from '../../../../../com/jagrosh/discordipc/IPCClient.d.ts'
import type { Callback } from '../../../../../com/jagrosh/discordipc/entities/Callback.d.ts'
import type { DiscordBuild } from '../../../../../com/jagrosh/discordipc/entities/DiscordBuild.d.ts'
import type { Pipe } from '../../../../../com/jagrosh/discordipc/entities/pipe/Pipe.d.ts'
import type { UnixPipe } from '../../../../../com/jagrosh/discordipc/entities/pipe/UnixPipe.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
export class MacPipe extends UnixPipe {
    static openPipe(paramarg0: IPCClient, paramarg1: number, paramarg2: { [key: string]: Callback }, ...paramarg3: DiscordBuild[]): Pipe;
    constructor(arg0: IPCClient, arg1: { [key: string]: Callback }, arg2: File)
    registerApp(arg0: string, arg1: string): void;
    // private registerCommand(arg0: string, arg1: string): void;
    registerSteamGame(arg0: string, arg1: string): void;
    // private registerUrl(arg0: string): void;
}