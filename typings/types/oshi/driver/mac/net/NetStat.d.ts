import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NetStat$IFdata } from '../../../../oshi/driver/mac/net/NetStat$IFdata.d.ts'
export class NetStat extends Object {
    static queryIFdata(paramarg0: number): { [key: number]: NetStat$IFdata };
    private constructor()
}