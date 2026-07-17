import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Task } from '../../../../net/ccbluex/liquidbounce/integration/task/type/Task.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
export class DeepLearningEngine extends Object {
    static INSTANCE: DeepLearningEngine;
    static getTask(): Task;
    static setTask(paramarg0: Task): void;
    // private deepLearningFolder: File;
    readonly djlCacheFolder: File;
    readonly enginesCacheFolder: File;
    // private isInitialized: boolean;
    /*not mapped: */ isInitialized(): boolean;
    // private logger: Logger;
    readonly modelsFolder: File;
    // private task: Task | null;
    /*not mapped: */ getTask(): Task | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    init(task: Task, $completion: Continuation<void>): any;
}