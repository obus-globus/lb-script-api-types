import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NetStat$IFdata } from '../../../../oshi/driver/mac/net/NetStat$IFdata.d.ts'
export class NetStat extends Object {
    static queryIFdata(paramarg0: number): JavaMap<number, NetStat$IFdata>;
    private constructor()
}