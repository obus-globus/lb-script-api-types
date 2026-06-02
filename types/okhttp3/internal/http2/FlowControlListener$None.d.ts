import type { Object } from '../../../java/lang/Object.d.ts'
import type { FlowControlListener } from '../../../okhttp3/internal/http2/FlowControlListener.d.ts'
import type { WindowCounter } from '../../../okhttp3/internal/http2/flowcontrol/WindowCounter.d.ts'
export class FlowControlListener$None extends Object implements FlowControlListener {
    static INSTANCE: FlowControlListener$None;
    receivingConnectionWindowChanged(windowCounter: WindowCounter): void;
    receivingStreamWindowChanged(streamId: number, windowCounter: WindowCounter, bufferSize: number): void;
}