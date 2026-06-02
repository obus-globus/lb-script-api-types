import type { Task } from '../../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
/**
 * A task with IO progress tracking
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt#L22 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt:22}
 */
export class ResourceTask extends Task {
    constructor(name: string)
    readonly bytesRead: number;
    readonly contentLength: number;
    /**
     * Current read speed in bytes per second
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt:34}
     */
    readonly speed: number;
    update(bytesRead: number, contentLength: number): void;
}