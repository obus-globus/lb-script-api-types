import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HWPartition } from '../../../../../oshi/hardware/HWPartition.d.ts'
import type { Quartet } from '../../../../../oshi/util/tuples/Quartet.d.ts'
export class Disklabel extends Object {
    static getDiskParams(paramarg0: string): Quartet<string, string, number, HWPartition[]>;
    private constructor()
}