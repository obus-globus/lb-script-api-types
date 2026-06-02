import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksCmdType extends Enum<SocksCmdType> {
    static BIND: SocksCmdType;
    static CONNECT: SocksCmdType;
    static UDP: SocksCmdType;
    static UNKNOWN: SocksCmdType;
    static fromByte(paramarg0: number): SocksCmdType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): SocksCmdType;
    static valueOf(paramarg0: string): SocksCmdType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "CONNECT" | "BIND" | "UDP" | "UNKNOWN";
}