import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdySynStreamFrame extends SpdyHeadersFrame, Object{
    associatedStreamId(): number;
    isInvalid(): boolean;
    isLast(): boolean;
    isTruncated(): boolean;
    isUnidirectional(): boolean;
    priority(): number;
    setAssociatedStreamId(arg0: number): SpdySynStreamFrame;
    setInvalid(): SpdySynStreamFrame;
    setLast(arg0: boolean): SpdySynStreamFrame;
    setPriority(arg0: number): SpdySynStreamFrame;
    setStreamId(arg0: number): SpdySynStreamFrame;
    setTruncated(): SpdyHeadersFrame;
    setUnidirectional(arg0: boolean): SpdySynStreamFrame;
    streamId(): number;
}