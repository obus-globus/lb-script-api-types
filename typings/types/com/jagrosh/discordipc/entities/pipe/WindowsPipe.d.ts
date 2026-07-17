import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { IPCClient } from '../../../../../com/jagrosh/discordipc/IPCClient.d.ts'
import type { Callback } from '../../../../../com/jagrosh/discordipc/entities/Callback.d.ts'
import type { DiscordBuild } from '../../../../../com/jagrosh/discordipc/entities/DiscordBuild.d.ts'
import type { Packet } from '../../../../../com/jagrosh/discordipc/entities/Packet.d.ts'
import type { Pipe } from '../../../../../com/jagrosh/discordipc/entities/pipe/Pipe.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
export class WindowsPipe extends Pipe {
    static openPipe(paramarg0: IPCClient, paramarg1: number, paramarg2: JavaMap<string, Callback>, ...paramarg3: DiscordBuild[]): Pipe;
    constructor(arg0: IPCClient, arg1: JavaMap<string, Callback>, arg2: File)
    file: RandomAccessFile;
    // private targetKey: number;
    // private targetLongKey: number;
    close(): void;
    read(): Packet;
    registerApp(arg0: string, arg1: string): void;
    registerSteamGame(arg0: string, arg1: string): void;
    write(arg0: number[]): void;
}