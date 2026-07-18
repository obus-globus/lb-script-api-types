import type { EventDefinition } from '../../../../io/ktor/events/EventDefinition.d.ts'
import type { Events } from '../../../../io/ktor/events/Events.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { DynamicApplicationModule } from '../../../../io/ktor/server/application/DynamicApplicationModule.d.ts'
import type { ModuleParametersInjector } from '../../../../io/ktor/server/application/ModuleParametersInjector.d.ts'
import type { ServerConfig } from '../../../../io/ktor/server/application/ServerConfig.d.ts'
import type { ApplicationEngine } from '../../../../io/ktor/server/engine/ApplicationEngine.d.ts'
import type { ApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/ApplicationEngine$Configuration.d.ts'
import type { ApplicationEngineFactory } from '../../../../io/ktor/server/engine/ApplicationEngineFactory.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { WatchEvent } from '../../../../java/nio/file/WatchEvent.d.ts'
import type { WatchKey } from '../../../../java/nio/file/WatchKey.d.ts'
import type { WatchService } from '../../../../java/nio/file/WatchService.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { ReentrantReadWriteLock } from '../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class EmbeddedServer<TEngine extends ApplicationEngine, TConfiguration extends ApplicationEngine$Configuration> extends Object {
    constructor(rootConfig: ServerConfig, engineFactory: ApplicationEngineFactory<TEngine, TConfiguration>, engineConfigBlock: (param0: TConfiguration) => void)
    readonly application: Application;
    // private applicationClassLoader: ClassLoader | null;
    // private applicationInstance: Application | null;
    // private applicationInstanceLock: ReentrantReadWriteLock;
    // private configuredWatchPath: string[];
    readonly engine: TEngine;
    readonly engineConfig: TConfiguration;
    readonly environment: ApplicationEnvironment;
    // private moduleInjector: ModuleParametersInjector;
    // private /*not mapped: */ getModuleInjector(): ModuleParametersInjector;
    // private /*not mapped: */ getModules(): DynamicApplicationModule[];
    readonly monitor: Events;
    // private packageWatchKeys: WatchKey[];
    // private recreateInstance: boolean;
    // private rootConfig: ServerConfig;
    // private watchPatterns: string[];
    // private watcher: WatchService | null;
    // private /*not mapped: */ getWatcher(): WatchService | null;
    // private avoidingDoubleStartup(block: () => void): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private avoidingDoubleStartupFor(fqName: string, block: () => void, $completion: Continuation<void>): any;
    // private cleanupWatcher(): void;
    // private createApplication(): Pair<Application, ClassLoader>;
    // private createClassLoader(): ClassLoader;
    // private currentApplication(): Application;
    // private destroyApplication(): void;
    // private destroyBlocking(application: Application, classLoader: ClassLoader | null): void;
    // private dynamicModule(name: string): DynamicApplicationModule;
    // private getFileChanges(): WatchEvent<Object>[] | null;
    // private instantiateAndConfigureApplication(currentClassLoader: ClassLoader): Application;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private launchModuleByName(name: string, currentClassLoader: ClassLoader, newInstance: Application, $completion: Continuation<void>): any;
    reload(): void;
    // private reloadApplication(): void;
    // private safeRaiseEvent(event: EventDefinition<Application>, application: Application): void;
    start(wait: boolean): EmbeddedServer<TEngine, TConfiguration>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    startSuspend(wait: boolean, $completion: Continuation<EmbeddedServer<TEngine, TConfiguration>>): any;
    stop(gracePeriodMillis: number, timeoutMillis: number): void;
    stop(shutdownGracePeriod: number, shutdownTimeout: number, timeUnit: TimeUnit): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    stopSuspend(gracePeriodMillis: number, timeoutMillis: number, $completion: Continuation<void>): any;
    // private watchUrls(urls: URL[]): void;
}