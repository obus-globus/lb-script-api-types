import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Task } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
/**
 * Manages asynchronous tasks and their progress
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:31}
 */
export class TaskManager extends Object {
    constructor(scope: CoroutineScope)
    /*not mapped: */ isCompleted(): boolean;
    readonly progress: number;
    // private scope: CoroutineScope;
    // private tasks: JavaMap<string, Task>;
    /**
     * Cancels a task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:97}
     */
    cancel(taskName: string): void;
    /**
     * Marks a task as completed. This will also mark all subtasks as completed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:78}
     */
    complete(taskName: string): void;
    /**
     * Creates a new task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:50}
     */
    createTask(name: string): Task;
    /**
     * Gets all active tasks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:113}
     */
    getActiveTasks(): Task[];
    /**
     * Launches a task within the task manager's scope
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:59}
     */
    launch<T extends unknown>(taskName: string, action: (param0: Task) => T): Task;
}