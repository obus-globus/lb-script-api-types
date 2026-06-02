import type { IoOps } from '../../../../io/netty/channel/IoOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NioIoOps extends Object implements IoOps {
    static ACCEPT: NioIoOps;
    static CONNECT: NioIoOps;
    static NONE: NioIoOps;
    static READ: NioIoOps;
    static READ_AND_ACCEPT: NioIoOps;
    static READ_AND_WRITE: NioIoOps;
    static WRITE: NioIoOps;
    static valueOf(paramarg0: number): NioIoOps;
    private constructor(arg0: number)
    // private value: number;
    contains(arg0: NioIoOps): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isIncludedIn(arg0: number): boolean;
    isNotIncludedIn(arg0: number): boolean;
    value(): number;
    with(arg0: NioIoOps): NioIoOps;
    without(arg0: NioIoOps): NioIoOps;
}