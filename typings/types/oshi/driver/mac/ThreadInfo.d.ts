import type { Object } from '../../../java/lang/Object.d.ts'
import type { ThreadInfo$ThreadStats } from '../../../oshi/driver/mac/ThreadInfo$ThreadStats.d.ts'
export class ThreadInfo extends Object {
    static queryTaskThreads(paramarg0: number): ThreadInfo$ThreadStats[];
    private constructor()
}