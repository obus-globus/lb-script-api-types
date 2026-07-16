import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCPriorityType extends Enum<RTCPriorityType> {
    static HIGH: RTCPriorityType;
    static LOW: RTCPriorityType;
    static MEDIUM: RTCPriorityType;
    static VERY_LOW: RTCPriorityType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCPriorityType;
    static values(): RTCPriorityType[];
    private constructor()
    name(): "VERY_LOW" | "LOW" | "MEDIUM" | "HIGH";
}