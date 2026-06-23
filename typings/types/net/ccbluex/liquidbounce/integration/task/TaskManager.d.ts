import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Task } from '../../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
/**
 * Manages asynchronous tasks and their progress
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:28}
 */
export class TaskManager extends Object {
    constructor(scope: CoroutineScope)
    /*not mapped: */ isCompleted(): boolean;
    readonly progress: number;
    // private scope: CoroutineScope;
    // private tasks: { [key: string]: Task };
    /**
     * Cancels a task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:94}
     */
    cancel(taskName: string): void;
    /**
     * Marks a task as completed. This will also mark all subtasks as completed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L75 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:75}
     */
    complete(taskName: string): void;
    /**
     * Creates a new task
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:47}
     */
    createTask(name: string): Task;
    /**
     * Gets all active tasks
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L110 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:110}
     */
    getActiveTasks(): Task[];
    /**
     * Launches a task within the task manager's scope
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/integration/task/TaskManager.kt:56}
     */
    launch<T extends unknown>(taskName: string, action: (param0: Task) => T): Task;
}