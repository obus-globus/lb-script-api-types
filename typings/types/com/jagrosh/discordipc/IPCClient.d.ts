import type { JavaMap } from '../../../JavaMap.d.ts'
import type { IPCClient$ApprovalMode } from '../../../com/jagrosh/discordipc/IPCClient$ApprovalMode.d.ts'
import type { IPCClient$Event } from '../../../com/jagrosh/discordipc/IPCClient$Event.d.ts'
import type { IPCListener } from '../../../com/jagrosh/discordipc/IPCListener.d.ts'
import type { Callback } from '../../../com/jagrosh/discordipc/entities/Callback.d.ts'
import type { DiscordBuild } from '../../../com/jagrosh/discordipc/entities/DiscordBuild.d.ts'
import type { RichPresence } from '../../../com/jagrosh/discordipc/entities/RichPresence.d.ts'
import type { User } from '../../../com/jagrosh/discordipc/entities/User.d.ts'
import type { Pipe } from '../../../com/jagrosh/discordipc/entities/pipe/Pipe.d.ts'
import type { PipeStatus } from '../../../com/jagrosh/discordipc/entities/pipe/PipeStatus.d.ts'
import type { Backoff } from '../../../com/jagrosh/discordipc/impl/Backoff.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class IPCClient extends Object implements Closeable {
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: boolean, arg2: boolean)
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean, arg4: string)
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: boolean, arg4: string, arg5: string)
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: string)
    constructor(arg0: number, arg1: boolean, arg2: boolean, arg3: string, arg4: string)
    constructor(arg0: number, arg1: boolean, arg2: string)
    constructor(arg0: number, arg1: boolean, arg2: string, arg3: string)
    // private RECONNECT_TIME_MS: Backoff;
    readonly applicationId: string;
    readonly autoRegister: boolean;
    // private callbacks: JavaMap<string, Callback>;
    // private clientId: number;
    readonly debugMode: boolean;
    readonly encoding: string;
    readonly forcedLogger: Logger;
    readonly listener: IPCListener;
    // private nextDelay: number;
    readonly optionalSteamId: string;
    // private pipe: Pipe;
    // private readThread: Thread;
    readonly verboseLogging: boolean;
    // private checkConnected(arg0: boolean): void;
    close(): void;
    connect(...arg0: DiscordBuild[]): void;
    getApplicationId(): string;
    getClientID(): number;
    getCurrentLogger(arg0: Logger): Logger;
    getCurrentUser(): User;
    getDiscordBuild(): DiscordBuild;
    getEncoding(): string;
    getOptionalSteamId(): string;
    getStatus(): PipeStatus;
    isAutoRegister(): boolean;
    isDebugMode(): boolean;
    isVerboseLogging(): boolean;
    // private readPipe(arg0: IPCClient): void;
    registerApp(arg0: string, arg1: string): void;
    registerSteamGame(arg0: string, arg1: string): void;
    respondToJoinRequest(arg0: User, arg1: IPCClient$ApprovalMode): void;
    respondToJoinRequest(arg0: User, arg1: IPCClient$ApprovalMode, arg2: Callback): void;
    sendRichPresence(arg0: RichPresence): void;
    sendRichPresence(arg0: RichPresence, arg1: Callback): void;
    setDebugMode(arg0: boolean): void;
    setEncoding(arg0: string): void;
    setForcedLogger(arg0: Logger): void;
    setListener(arg0: IPCListener): void;
    setVerboseLogging(arg0: boolean): void;
    // private startReading(): void;
    subscribe(arg0: IPCClient$Event): void;
    subscribe(arg0: IPCClient$Event, arg1: Callback): void;
    // private updateReconnectTime(): void;
}