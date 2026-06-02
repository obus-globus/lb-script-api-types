import type { ThreadPoolExecutor } from '../../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { ConfigurableThreadPoolExecutor } from '../../../../org/apache/tika/concurrent/ConfigurableThreadPoolExecutor.d.ts'
export class SimpleThreadPoolExecutor extends ThreadPoolExecutor implements ConfigurableThreadPoolExecutor {
    constructor()
}