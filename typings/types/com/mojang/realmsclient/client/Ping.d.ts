import type { RegionPingResult } from '../../../../com/mojang/realmsclient/dto/RegionPingResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Ping extends Object {
    static ping(paramregions: (Object | null)[]): RegionPingResult[];
    static pingAllRegions(): RegionPingResult[];
    constructor()
}