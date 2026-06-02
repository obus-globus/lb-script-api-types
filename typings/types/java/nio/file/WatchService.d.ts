import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { WatchKey } from '../../../java/nio/file/WatchKey.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WatchService extends Closeable, Object{
    close(): void;
    poll(): WatchKey;
    poll(arg0: number, arg1: TimeUnit): WatchKey;
    take(): WatchKey;
}