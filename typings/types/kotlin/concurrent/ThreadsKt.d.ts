import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ThreadsKt extends Object {
    static thread(start: boolean, isDaemon: boolean, contextClassLoader: ClassLoader | null, name: string | null, priority: number, block: () => void): Thread;
}