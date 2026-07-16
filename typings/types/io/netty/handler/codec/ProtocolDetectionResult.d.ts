import type { ProtocolDetectionState } from '../../../../io/netty/handler/codec/ProtocolDetectionState.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolDetectionResult<T extends unknown> extends Object {
    static detected<T extends unknown>(paramarg0: T): ProtocolDetectionResult<T>;
    static invalid<T extends unknown>(): ProtocolDetectionResult<T>;
    static needsMoreData<T extends unknown>(): ProtocolDetectionResult<T>;
    private constructor(arg0: ProtocolDetectionState, arg1: T)
    // private result: T;
    // private state: ProtocolDetectionState;
    detectedProtocol(): T;
    state(): ProtocolDetectionState;
}