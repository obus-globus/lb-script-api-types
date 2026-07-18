import type { EmbeddedServer } from '../../../../io/ktor/server/engine/EmbeddedServer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ShutdownHookJvmKt extends Object {
    static getSHUTDOWN_HOOK_ENABLED(): boolean;
    static platformAddShutdownHook(self: EmbeddedServer<any, any>, stop: () => void): void;
}