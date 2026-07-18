import type { EmbeddedServer } from '../../../../io/ktor/server/engine/EmbeddedServer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ShutdownHookKt extends Object {
    static addShutdownHook(self: EmbeddedServer<any, any>, stop: () => void): void;
}