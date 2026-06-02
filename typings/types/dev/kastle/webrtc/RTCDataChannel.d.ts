import type { RTCDataChannelBuffer } from '../../../dev/kastle/webrtc/RTCDataChannelBuffer.d.ts'
import type { RTCDataChannelObserver } from '../../../dev/kastle/webrtc/RTCDataChannelObserver.d.ts'
import type { RTCDataChannelState } from '../../../dev/kastle/webrtc/RTCDataChannelState.d.ts'
import type { DisposableNativeObject } from '../../../dev/kastle/webrtc/internal/DisposableNativeObject.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class RTCDataChannel extends DisposableNativeObject {
    private constructor()
    close(): void;
    dispose(): void;
    getBufferedAmount(): number;
    getId(): number;
    getLabel(): string;
    getMaxPacketLifeTime(): number;
    getMaxRetransmits(): number;
    getProtocol(): string;
    getState(): RTCDataChannelState;
    isNegotiated(): boolean;
    isOrdered(): boolean;
    isReliable(): boolean;
    registerObserver(arg0: RTCDataChannelObserver): void;
    send(arg0: RTCDataChannelBuffer): void;
    // private sendByteArrayBuffer(arg0: number[], arg1: boolean): void;
    // private sendDirectBuffer(arg0: ByteBuffer, arg1: boolean): void;
    unregisterObserver(): void;
}