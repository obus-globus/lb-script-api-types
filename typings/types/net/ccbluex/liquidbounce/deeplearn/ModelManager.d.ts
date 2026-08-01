import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Mutex } from '../../../../kotlinx/coroutines/sync/Mutex.d.ts'
import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { TwoDimensionalRegressionModel } from '../../../../net/ccbluex/liquidbounce/deeplearn/models/TwoDimensionalRegressionModel.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
export class ModelManager extends ValueGroup implements EventListener {
    static INSTANCE: ModelManager;
    // private /*not mapped: */ getAllCombatModels(): string[];
    // private /*not mapped: */ getAvailableCombatModels(): string[];
    // private builtInCombatModels: string[];
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private lifecycleMutex: Mutex;
    // private logger: Logger;
    readonly models: ModeValueGroup<TwoDimensionalRegressionModel>;
    readonly running: boolean;
    children(): EventListener[];
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    load($completion: Continuation<void>): any;
    // private loadModels(): TwoDimensionalRegressionModel[];
    parent(): EventListener | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    reload($completion: Continuation<void>): any;
    unregister(): void;
}