import type { Object } from '../../../../java/lang/Object.d.ts'
export class NetStat$IFdata extends Object {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number)
    readonly collisions: number;
    // private iBytes: number;
    // private iDrops: number;
    // private iErrors: number;
    // private iPackets: number;
    readonly ifType: number;
    // private oBytes: number;
    // private oErrors: number;
    // private oPackets: number;
    readonly speed: number;
    readonly timeStamp: number;
    getCollisions(): number;
    getIBytes(): number;
    getIDrops(): number;
    getIErrors(): number;
    getIPackets(): number;
    getIfType(): number;
    getOBytes(): number;
    getOErrors(): number;
    getOPackets(): number;
    getSpeed(): number;
    getTimeStamp(): number;
}