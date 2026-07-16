import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Rfc1349TrafficClass extends Enum<Rfc1349TrafficClass> {
    static IPTOS_LOWCOST: Rfc1349TrafficClass;
    static IPTOS_LOWDELAY: Rfc1349TrafficClass;
    static IPTOS_NORMAL: Rfc1349TrafficClass;
    static IPTOS_RELIABILITY: Rfc1349TrafficClass;
    static IPTOS_THROUGHPUT: Rfc1349TrafficClass;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Rfc1349TrafficClass;
    static values(): Rfc1349TrafficClass[];
    private constructor(trafficClass: number)
    // private trafficClass: number;
    value(): number;
    name(): "IPTOS_NORMAL" | "IPTOS_LOWCOST" | "IPTOS_LOWDELAY" | "IPTOS_RELIABILITY" | "IPTOS_THROUGHPUT";
}