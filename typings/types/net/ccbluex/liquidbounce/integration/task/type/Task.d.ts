import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../../../kotlinx/coroutines/Job.d.ts'
import type { ResourceTask } from '../../../../../../net/ccbluex/liquidbounce/integration/task/type/ResourceTask.d.ts'
/**
 * An asynchronous task with progress tracking
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:25}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:60}
     */
    areAllSubTasksCompleted(): boolean;
    /**
     * Calculates aggregate progress of all subtasks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:52}
     */
    calculateProgress(): number;
    /**
     * Creates or gets an existing download sub-task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:45}
     */
    getOrCreateFileTask(subTaskName: string): ResourceTask;
    /**
     * Creates or gets an existing sub-task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/type/Task.kt:38}
     */
    getOrCreateTask(subTaskName: string): Task;
}