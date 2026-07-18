import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2Exception } from '../../../../../io/netty/handler/codec/http2/Http2Exception.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { StreamByteDistributor$StreamState } from '../../../../../io/netty/handler/codec/http2/StreamByteDistributor$StreamState.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Http2CodecUtil extends Object {
    static CONNECTION_STREAM_ID: number;
    static CONTINUATION_FRAME_HEADER_LENGTH: number;
    static DATA_FRAME_HEADER_LENGTH: number;
    static DEFAULT_GRACEFUL_SHUTDOWN_TIMEOUT_MILLIS: number;
    static DEFAULT_HEADER_LIST_SIZE: number;
    static DEFAULT_HEADER_TABLE_SIZE: number;
    static DEFAULT_MAX_FRAME_SIZE: number;
    static DEFAULT_MAX_QUEUED_CONTROL_FRAMES: number;
    static DEFAULT_PRIORITY_WEIGHT: number;
    static DEFAULT_WINDOW_SIZE: number;
    static FRAME_HEADER_LENGTH: number;
    static GO_AWAY_FRAME_HEADER_LENGTH: number;
    static HEADERS_FRAME_HEADER_LENGTH: number;
    static HTTP_UPGRADE_PROTOCOL_NAME: CharSequence;
    static HTTP_UPGRADE_SETTINGS_HEADER: CharSequence;
    static HTTP_UPGRADE_STREAM_ID: number;
    static INT_FIELD_LENGTH: number;
    static MAX_CONCURRENT_STREAMS: number;
    static MAX_FRAME_SIZE_LOWER_BOUND: number;
    static MAX_FRAME_SIZE_UPPER_BOUND: number;
    static MAX_HEADER_LIST_SIZE: number;
    static MAX_HEADER_TABLE_SIZE: number;
    static MAX_INITIAL_WINDOW_SIZE: number;
    static MAX_PADDING: number;
    static MAX_UNSIGNED_BYTE: number;
    static MAX_UNSIGNED_INT: number;
    static MAX_WEIGHT: number;
    static MIN_CONCURRENT_STREAMS: number;
    static MIN_HEADER_LIST_SIZE: number;
    static MIN_HEADER_TABLE_SIZE: number;
    static MIN_INITIAL_WINDOW_SIZE: number;
    static MIN_WEIGHT: number;
    static NUM_STANDARD_SETTINGS: number;
    static PING_FRAME_PAYLOAD_LENGTH: number;
    static PRIORITY_ENTRY_LENGTH: number;
    static PRIORITY_FRAME_LENGTH: number;
    static PUSH_PROMISE_FRAME_HEADER_LENGTH: number;
    static RST_STREAM_FRAME_LENGTH: number;
    static SETTINGS_ENABLE_CONNECT_PROTOCOL: string;
    static SETTINGS_ENABLE_PUSH: string;
    static SETTINGS_HEADER_TABLE_SIZE: string;
    static SETTINGS_INITIAL_WINDOW_SIZE: string;
    static SETTINGS_MAX_CONCURRENT_STREAMS: string;
    static SETTINGS_MAX_FRAME_SIZE: string;
    static SETTINGS_MAX_HEADER_LIST_SIZE: string;
    static SETTING_ENTRY_LENGTH: number;
    static SMALLEST_MAX_CONCURRENT_STREAMS: number;
    static TLS_UPGRADE_PROTOCOL_NAME: CharSequence;
    static WINDOW_UPDATE_FRAME_LENGTH: number;
    static calculateMaxHeaderListSizeGoAway(paramarg0: number): number;
    static connectionPrefaceBuf(): ByteBuf;
    static getEmbeddedHttp2Exception(paramarg0: Throwable): Http2Exception;
    static headerListSizeExceeded(paramarg0: number, paramarg1: number, paramarg2: boolean): void;
    static headerListSizeExceeded(paramarg0: number): void;
    static isMaxFrameSizeValid(paramarg0: number): boolean;
    static isOutboundStream(paramarg0: boolean, paramarg1: number): boolean;
    static isStreamIdValid(paramarg0: number): boolean;
    static readUnsignedInt(paramarg0: ByteBuf): number;
    static streamableBytes(paramarg0: StreamByteDistributor$StreamState): number;
    static toByteBuf(paramarg0: ChannelHandlerContext, paramarg1: Throwable): ByteBuf;
    static verifyPadding(paramarg0: number): void;
    static writeFrameHeader(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: Http2Flags, paramarg4: number): void;
    private constructor()
}