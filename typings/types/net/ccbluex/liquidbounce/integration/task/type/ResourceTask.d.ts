import type { Task } from '../../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
/**
 * A task with IO progress tracking
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt:25}
 */
export class ResourceTask extends Task {
    constructor(name: string)
    readonly bytesRead: number;
    readonly contentLength: number;
    /**
     * Current read speed in bytes per second
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/ResourceTask.kt:37}
     */
    readonly speed: number;
    update(bytesRead: number, contentLength: number): void;
}