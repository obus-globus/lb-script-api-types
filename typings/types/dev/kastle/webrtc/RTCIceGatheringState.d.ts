import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCIceGatheringState extends Enum<RTCIceGatheringState> {
    static COMPLETE: RTCIceGatheringState;
    static GATHERING: RTCIceGatheringState;
    static NEW: RTCIceGatheringState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCIceGatheringState;
    static values(): RTCIceGatheringState[];
    private constructor()
    name(): "NEW" | "GATHERING" | "COMPLETE";
}