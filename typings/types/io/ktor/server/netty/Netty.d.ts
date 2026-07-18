import type { Events } from '../../../../io/ktor/events/Events.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationEngineFactory } from '../../../../io/ktor/server/engine/ApplicationEngineFactory.d.ts'
import type { NettyApplicationEngine } from '../../../../io/ktor/server/netty/NettyApplicationEngine.d.ts'
import type { NettyApplicationEngine$Configuration } from '../../../../io/ktor/server/netty/NettyApplicationEngine$Configuration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Netty extends Object implements ApplicationEngineFactory<NettyApplicationEngine, NettyApplicationEngine$Configuration> {
    static INSTANCE: Netty;
    configuration(configure: (param0: NettyApplicationEngine$Configuration) => void): NettyApplicationEngine$Configuration;
    create(environment: ApplicationEnvironment, monitor: Events, developmentMode: boolean, configuration: NettyApplicationEngine$Configuration, applicationProvider: () => Application): NettyApplicationEngine;
}