import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordActivity } from '../../../net/ccbluex/discordipc/DiscordActivity.d.ts'
import type { DiscordIpcClient$State } from '../../../net/ccbluex/discordipc/DiscordIpcClient$State.d.ts'
import type { DiscordIpcPlatform } from '../../../net/ccbluex/discordipc/DiscordIpcPlatform.d.ts'
import type { DiscordIpcTransport } from '../../../net/ccbluex/discordipc/DiscordIpcTransport.d.ts'
import type { DiscordIpcTransport$Factory } from '../../../net/ccbluex/discordipc/DiscordIpcTransport$Factory.d.ts'
export class DiscordIpcClient extends Object implements Closeable {
    static PROTOCOL_VERSION: number;
    constructor(applicationId: number, platform?: DiscordIpcPlatform, readerExecutor?: ExecutorService)
    constructor(applicationId: number, platform: DiscordIpcPlatform, readerExecutor: ExecutorService, pipePaths: () => string[], transportFactory: DiscordIpcTransport$Factory)
    // private applicationId: number;
    // private lastActivityJson: string | null;
    // private pipePaths: () => string[];
    // private readerExecutor: ExecutorService;
    // private readerTask: Future<Object> | null;
    readonly state: DiscordIpcClient$State;
    // private stateLock: ReentrantLock;
    // private transport: DiscordIpcTransport | null;
    // private transportFactory: DiscordIpcTransport$Factory;
    close(): void;
    connect(): void;
    // private disconnect(currentTransport: DiscordIpcTransport): void;
    // private handleFrame(payload: JsonObject): void;
    // private handshake(candidate: DiscordIpcTransport): void;
    sendActivity(activity: DiscordActivity): void;
    // private startReader(currentTransport: DiscordIpcTransport): void;
}