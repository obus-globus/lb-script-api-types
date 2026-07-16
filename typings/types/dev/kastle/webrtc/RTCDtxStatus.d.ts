import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCDtxStatus extends Enum<RTCDtxStatus> {
    static DISABLED: RTCDtxStatus;
    static ENABLED: RTCDtxStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RTCDtxStatus;
    static values(): RTCDtxStatus[];
    private constructor()
    name(): "DISABLED" | "ENABLED";
}