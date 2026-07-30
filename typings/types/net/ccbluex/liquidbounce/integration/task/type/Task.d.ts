import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../../../kotlinx/coroutines/Job.d.ts'
import type { ResourceTask } from '../../../../../../net/ccbluex/liquidbounce/integration/task/type/ResourceTask.d.ts'
/**
 * An asynchronous task with progress tracking
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:28}
 */
export class Task extends Object {
    constructor(name: string)
    // private isCompleted: boolean;
    /*not mapped: */ isCompleted(): boolean;
    job: Job | null;
    readonly name: string;
    progress: number;
    startTime: number;
    readonly subTasks: JavaMap<string, Task>;
    /**
     * Checks if all subtasks are completed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:63}
     */
    areAllSubTasksCompleted(): boolean;
    /**
     * Calculates aggregate progress of all subtasks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:55}
     */
    calculateProgress(): number;
    /**
     * Creates or gets an existing download sub-task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:48}
     */
    getOrCreateFileTask(subTaskName: string): ResourceTask;
    /**
     * Creates or gets an existing sub-task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:41}
     */
    getOrCreateTask(subTaskName: string): Task;
}