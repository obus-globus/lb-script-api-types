import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DecoratingHttp2FrameWriter } from '../../../../../io/netty/handler/codec/http2/DecoratingHttp2FrameWriter.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
import type { Http2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController.d.ts'
import type { Http2SettingsReceivedConsumer } from '../../../../../io/netty/handler/codec/http2/Http2SettingsReceivedConsumer.d.ts'
export class DecoratingHttp2ConnectionEncoder extends DecoratingHttp2FrameWriter implements Http2ConnectionEncoder, Http2SettingsReceivedConsumer {
    constructor(arg0: Http2ConnectionEncoder)
    // private delegate: Http2ConnectionEncoder;
    connection(): Http2Connection;
    consumeReceivedSettings(arg0: JavaMap<any, any>): void;
    flowController(): Http2RemoteFlowController;
    frameWriter(): Http2FrameWriter;
    lifecycleManager(arg0: Http2LifecycleManager): void;
    pollSentSettings(): JavaMap<any, any>;
    remoteSettings(arg0: JavaMap<any, any>): void;
}