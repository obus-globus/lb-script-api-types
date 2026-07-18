import type { EmbeddedServer } from '../../../../io/ktor/server/engine/EmbeddedServer.d.ts'
import type { NettyApplicationEngine } from '../../../../io/ktor/server/netty/NettyApplicationEngine.d.ts'
import type { NettyApplicationEngine$Configuration } from '../../../../io/ktor/server/netty/NettyApplicationEngine$Configuration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EngineMain extends Object {
    static INSTANCE: EngineMain;
    static main(args: string[]): void;
    createServer(args: string[]): EmbeddedServer<NettyApplicationEngine, NettyApplicationEngine$Configuration>;
    main(args: string[]): void;
}