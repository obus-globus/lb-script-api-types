import type { Task } from '../../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
/**
 * A task with IO progress tracking
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt:25}
 */
export class ResourceTask extends Task {
    constructor(name: string)
    readonly bytesRead: number;
    readonly contentLength: number;
    /**
     * Current read speed in bytes per second
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt:37}
     */
    readonly speed: number;
    update(bytesRead: number, contentLength: number): void;
}