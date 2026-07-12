import type { IPCClient } from '../../../../../com/jagrosh/discordipc/IPCClient.d.ts'
import type { Callback } from '../../../../../com/jagrosh/discordipc/entities/Callback.d.ts'
import type { Packet } from '../../../../../com/jagrosh/discordipc/entities/Packet.d.ts'
import type { Pipe } from '../../../../../com/jagrosh/discordipc/entities/pipe/Pipe.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AFUNIXSocket } from '../../../../../org/newsclub/net/unix/AFUNIXSocket.d.ts'
export class UnixPipe extends Pipe {
    static openPipe(paramarg0: IPCClient, paramarg1: number, paramarg2: { [key: string]: Callback }, ...paramarg3: (Object | null)[]): Pipe;
    constructor(arg0: IPCClient, arg1: { [key: string]: Callback }, arg2: File)
    // private socket: AFUNIXSocket;
    close(): void;
    mkdir(arg0: string): boolean;
    read(): Packet;
    registerApp(arg0: string, arg1: string): void;
    registerSteamGame(arg0: string, arg1: string): void;
    write(arg0: number[]): void;
}