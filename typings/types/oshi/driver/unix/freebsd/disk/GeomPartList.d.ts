import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HWPartition } from '../../../../../oshi/hardware/HWPartition.d.ts'
export class GeomPartList extends Object {
    static queryPartitions(): { [key: string]: HWPartition[] };
    private constructor()
}