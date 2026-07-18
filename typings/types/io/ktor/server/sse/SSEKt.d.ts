import type { ApplicationPlugin } from '../../../../io/ktor/server/application/ApplicationPlugin.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class SSEKt extends Object {
    static getLOGGER(): Logger;
    static getSSE(): ApplicationPlugin<void>;
}