import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ProtocolDetectionState extends Enum<ProtocolDetectionState> {
    static DETECTED: ProtocolDetectionState;
    static INVALID: ProtocolDetectionState;
    static NEEDS_MORE_DATA: ProtocolDetectionState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ProtocolDetectionState;
    static values(): ProtocolDetectionState[];
    private constructor()
    name(): "NEEDS_MORE_DATA" | "INVALID" | "DETECTED";
}