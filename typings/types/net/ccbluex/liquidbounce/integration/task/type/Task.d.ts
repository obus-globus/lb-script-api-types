import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../../../kotlinx/coroutines/Job.d.ts'
import type { ResourceTask } from '../../../../../../net/ccbluex/liquidbounce/integration/task/type/ResourceTask.d.ts'
/**
 * An asynchronous task with progress tracking
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:28}
 */
export class Task extends Object {
    constructor(name: string)
    // private isCompleted: boolean;
    /*not mapped: */ isCompleted(): boolean;
    job: Job | null;
    readonly name: string;
    progress: number;
    startTime: number;
    readonly subTasks: { [key: string]: Task };
    /**
     * Checks if all subtasks are completed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:63}
     */
    areAllSubTasksCompleted(): boolean;
    /**
     * Calculates aggregate progress of all subtasks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:55}
     */
    calculateProgress(): number;
    /**
     * Creates or gets an existing download sub-task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:48}
     */
    getOrCreateFileTask(subTaskName: string): ResourceTask;
    /**
     * Creates or gets an existing sub-task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:41}
     */
    getOrCreateTask(subTaskName: string): Task;
}