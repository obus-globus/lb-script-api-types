import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCDtxStatus extends Enum<RTCDtxStatus> {
    static DISABLED: RTCDtxStatus;
    static ENABLED: RTCDtxStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCDtxStatus;
    static values(): RTCDtxStatus[];
    private constructor()
    name(): "DISABLED" | "ENABLED";
}