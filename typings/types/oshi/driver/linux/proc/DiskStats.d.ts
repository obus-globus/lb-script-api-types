import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DiskStats$IoStat } from '../../../../oshi/driver/linux/proc/DiskStats$IoStat.d.ts'
export class DiskStats extends Object {
    static getDiskStats(): { [key: string]: Map<DiskStats$IoStat, number> };
    private constructor()
}