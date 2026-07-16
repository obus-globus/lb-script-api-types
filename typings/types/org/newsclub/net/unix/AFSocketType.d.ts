import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AFSocketType extends Enum<AFSocketType> {
    static SOCK_DGRAM: AFSocketType;
    static SOCK_RAW: AFSocketType;
    static SOCK_RDM: AFSocketType;
    static SOCK_SEQPACKET: AFSocketType;
    static SOCK_STREAM: AFSocketType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AFSocketType;
    static values(): AFSocketType[];
    private constructor(arg2: number)
    // private id: number;
    getId(): number;
    name(): "SOCK_STREAM" | "SOCK_DGRAM" | "SOCK_RAW" | "SOCK_RDM" | "SOCK_SEQPACKET";
}