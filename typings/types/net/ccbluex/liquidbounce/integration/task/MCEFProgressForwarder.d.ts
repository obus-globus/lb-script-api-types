import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Task } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
import type { MCEFProgressListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/MCEFProgressListener.d.ts'
export class MCEFProgressForwarder extends Object implements MCEFProgressListener {
    constructor(task: Task)
    readonly task: Task;
    /**
     * If everything is complete
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:36}
     */
    onComplete(): void;
    /**
     * File download or extraction end
     *
     * @param taskName Task name
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:61}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:50}
     */
    onFileProgress(taskName: string, bytesRead: number, contentLength: number, done: boolean): void;
    /**
     * File download or extraction start
     *
     * @param taskName Task name
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:42}
     */
    onFileStart(taskName: string): void;
    /**
     * Progress update for general tasks
     *
     * @param task Task name
     * @param progress Progress
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/MCEFProgressForwarder.kt:27}
     */
    onProgressUpdate(task: string, progress: number): void;
}