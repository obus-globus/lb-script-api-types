import type { Events } from '../../../../io/ktor/events/Events.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { BaseApplicationEngine } from '../../../../io/ktor/server/engine/BaseApplicationEngine.d.ts'
import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { NettyApplicationEngine$Configuration } from '../../../../io/ktor/server/netty/NettyApplicationEngine$Configuration.d.ts'
import type { ServerBootstrap } from '../../../../io/netty/bootstrap/ServerBootstrap.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompletableJob } from '../../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { ExecutorCoroutineDispatcher } from '../../../../kotlinx/coroutines/ExecutorCoroutineDispatcher.d.ts'
export class NettyApplicationEngine extends BaseApplicationEngine {
    constructor(environment: ApplicationEnvironment, monitor: Events, developmentMode: boolean, configuration: NettyApplicationEngine$Configuration, applicationProvider: () => Application)
    // private applicationProvider: () => Application;
    // private bootstraps: ServerBootstrap[];
    /*not mapped: */ getBootstraps$ktor_server_netty(): ServerBootstrap[];
    // private callEventGroup: (Object | null)[];
    // private /*not mapped: */ getCallEventGroup(): (Object | null)[];
    // private cancellationJob: CompletableJob | null;
    // private channels: Channel[] | null;
    readonly configuration: NettyApplicationEngine$Configuration;
    // private connectionEventGroup: (Object | null)[];
    // private /*not mapped: */ getConnectionEventGroup(): (Object | null)[];
    // private customBootstrap: ServerBootstrap;
    // private /*not mapped: */ getCustomBootstrap(): ServerBootstrap;
    // private workerDispatcher: ExecutorCoroutineDispatcher;
    // private /*not mapped: */ getWorkerDispatcher(): ExecutorCoroutineDispatcher;
    // private workerEventGroup: (Object | null)[];
    // private /*not mapped: */ getWorkerEventGroup(): (Object | null)[];
    // private createBootstrap(connector: EngineConnectorConfig): ServerBootstrap;
    start(wait: boolean): NettyApplicationEngine;
    stop(gracePeriodMillis: number, timeoutMillis: number): void;
    // private terminate(): void;
    toString(): string;
    // private withStopException<R extends unknown>(block: () => R): void;
}