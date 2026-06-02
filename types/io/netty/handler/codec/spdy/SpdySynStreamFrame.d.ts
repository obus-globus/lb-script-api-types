import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdySynStreamFrame extends SpdyHeadersFrame, Object{
    associatedStreamId(): number;
    isUnidirectional(): boolean;
    priority(): number;
    setAssociatedStreamId(arg0: number): SpdySynStreamFrame;
    setInvalid(): SpdySynStreamFrame;
    setLast(arg0: boolean): SpdySynStreamFrame;
    setPriority(arg0: number): SpdySynStreamFrame;
    setStreamId(arg0: number): SpdySynStreamFrame;
    setUnidirectional(arg0: boolean): SpdySynStreamFrame;
}