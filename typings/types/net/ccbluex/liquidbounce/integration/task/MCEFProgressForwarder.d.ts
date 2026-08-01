import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Task } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
import type { MCEFProgressListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/MCEFProgressListener.d.ts'
export class MCEFProgressForwarder extends Object implements MCEFProgressListener {
    constructor(task: Task)
    readonly task: Task;
    /**
     * If everything is complete
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:39}
     */
    onComplete(): void;
    /**
     * File download or extraction end
     *
     * @param taskName Task name
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:65}
     */
    onFileEnd(taskName: string): void;
    /**
     * File download or extraction progress
     *
     * @param taskName Task name
     * @param bytesRead Bytes read
     * @param contentLength Total bytes
     * @param done Is download or extraction done
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:57}
     */
    onFileProgress(taskName: string, bytesRead: number, contentLength: number, done: boolean): void;
    /**
     * File download or extraction start
     *
     * @param taskName Task name
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:46}
     */
    onFileStart(taskName: string): void;
    /**
     * Progress update for general tasks
     *
     * @param task Task name
     * @param progress Progress
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:33}
     */
    onProgressUpdate(task: string, progress: number): void;
}