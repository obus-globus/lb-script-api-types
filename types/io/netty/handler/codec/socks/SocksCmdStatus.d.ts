import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksCmdStatus extends Enum<SocksCmdStatus> {
    static ADDRESS_NOT_SUPPORTED: SocksCmdStatus;
    static COMMAND_NOT_SUPPORTED: SocksCmdStatus;
    static FAILURE: SocksCmdStatus;
    static FORBIDDEN: SocksCmdStatus;
    static HOST_UNREACHABLE: SocksCmdStatus;
    static NETWORK_UNREACHABLE: SocksCmdStatus;
    static REFUSED: SocksCmdStatus;
    static SUCCESS: SocksCmdStatus;
    static TTL_EXPIRED: SocksCmdStatus;
    static UNASSIGNED: SocksCmdStatus;
    static fromByte(paramarg0: number): SocksCmdStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): SocksCmdStatus;
    static valueOf(paramarg0: string): SocksCmdStatus;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "SUCCESS" | "FAILURE" | "FORBIDDEN" | "NETWORK_UNREACHABLE" | "HOST_UNREACHABLE" | "REFUSED" | "TTL_EXPIRED" | "COMMAND_NOT_SUPPORTED" | "ADDRESS_NOT_SUPPORTED" | "UNASSIGNED";
}