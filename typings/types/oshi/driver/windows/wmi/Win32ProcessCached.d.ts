import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ReentrantLock } from '../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class Win32ProcessCached extends Object {
    static getInstance(): Win32ProcessCached;
    private constructor()
    // private commandLineCache: JavaMap<number, Pair<number, string>>;
    // private commandLineCacheLock: ReentrantLock;
    getCommandLine(arg0: number, arg1: number): string;
}