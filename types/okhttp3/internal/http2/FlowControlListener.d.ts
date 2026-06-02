import type { Object } from '../../../java/lang/Object.d.ts'
import type { WindowCounter } from '../../../okhttp3/internal/http2/flowcontrol/WindowCounter.d.ts'
export interface FlowControlListener extends Object{
    receivingConnectionWindowChanged(windowCounter: WindowCounter): void;
    receivingStreamWindowChanged(streamId: number, windowCounter: WindowCounter, bufferSize: number): void;
}