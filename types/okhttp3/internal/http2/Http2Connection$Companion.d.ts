import type { Object } from '../../../java/lang/Object.d.ts'
import type { Settings } from '../../../okhttp3/internal/http2/Settings.d.ts'
export class Http2Connection$Companion extends Object {
    AWAIT_PING: number;
    readonly DEFAULT_SETTINGS: Settings;
    DEGRADED_PING: number;
    DEGRADED_PONG_TIMEOUT_NS: number;
    INTERVAL_PING: number;
    OKHTTP_CLIENT_WINDOW_SIZE: number;
}