import type { File } from '../../../../java/io/File.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    /**
     * DJL will automatically download engine libraries, as soon we call [Engine.getInstance()],
     * for the platform we are running on.
     *
     * This should be done here,
     * as we want to make sure that the libraries are downloaded
     * before we try to load any models.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/DeepLearningEngine.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/DeepLearningEngine.kt:78}
     */
    init(task: Task): void;
}