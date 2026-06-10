import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HWPartition } from '../../../../oshi/hardware/HWPartition.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class Lspv extends Object {
    static queryLogicalVolumes(paramarg0: string, paramarg1: { [key: string]: Pair<number, number> }): HWPartition[];
    private constructor()
}