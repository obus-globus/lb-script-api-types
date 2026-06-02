import type { ProtocolDetectionState } from '../../../../io/netty/handler/codec/ProtocolDetectionState.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolDetectionResult<T extends Object | number | string | boolean> extends Object {
    static detected(paramarg0: Object | null): ProtocolDetectionResult<Object>;
    static invalid(): ProtocolDetectionResult<Object>;
    static needsMoreData(): ProtocolDetectionResult<Object>;
    private constructor(arg0: ProtocolDetectionState, arg1: T)
    // private result: T;
    // private state: ProtocolDetectionState;
    detectedProtocol(): T;
    state(): ProtocolDetectionState;
}