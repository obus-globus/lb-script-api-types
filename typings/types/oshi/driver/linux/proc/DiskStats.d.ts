import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DiskStats$IoStat } from '../../../../oshi/driver/linux/proc/DiskStats$IoStat.d.ts'
export class DiskStats extends Object {
    static getDiskStats(): JavaMap<string, JavaMap<DiskStats$IoStat, number>>;
    private constructor()
}