import type { Object } from '../../../java/lang/Object.d.ts'
import type { Http2Connection } from '../../../okhttp3/internal/http2/Http2Connection.d.ts'
import type { Http2Connection$Listener$Companion } from '../../../okhttp3/internal/http2/Http2Connection$Listener$Companion.d.ts'
import type { Http2Stream } from '../../../okhttp3/internal/http2/Http2Stream.d.ts'
import type { Settings } from '../../../okhttp3/internal/http2/Settings.d.ts'
export abstract class Http2Connection$Listener extends Object {
    static Companion: Http2Connection$Listener$Companion;
    static REFUSE_INCOMING_STREAMS: Http2Connection$Listener;
    constructor()
    onSettings(connection: Http2Connection, settings: Settings): void;
    onStream(stream: Http2Stream): void;
}