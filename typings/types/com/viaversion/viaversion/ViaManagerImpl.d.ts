import type { ViaManagerImpl$ViaManagerBuilder } from '../../../com/viaversion/viaversion/ViaManagerImpl$ViaManagerBuilder.d.ts'
import type { ViaManager } from '../../../com/viaversion/viaversion/api/ViaManager.d.ts'
import type { ConfigurationProvider } from '../../../com/viaversion/viaversion/api/configuration/ConfigurationProvider.d.ts'
import type { ConnectionManager } from '../../../com/viaversion/viaversion/api/connection/ConnectionManager.d.ts'
import type { DebugHandler } from '../../../com/viaversion/viaversion/api/debug/DebugHandler.d.ts'
import type { PlatformTask } from '../../../com/viaversion/viaversion/api/platform/PlatformTask.d.ts'
import type { ViaInjector } from '../../../com/viaversion/viaversion/api/platform/ViaInjector.d.ts'
import type { ViaPlatform } from '../../../com/viaversion/viaversion/api/platform/ViaPlatform.d.ts'
import type { ViaPlatformLoader } from '../../../com/viaversion/viaversion/api/platform/ViaPlatformLoader.d.ts'
import type { ViaProviders } from '../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { ProtocolManager } from '../../../com/viaversion/viaversion/api/protocol/ProtocolManager.d.ts'
import type { Scheduler } from '../../../com/viaversion/viaversion/api/scheduler/Scheduler.d.ts'
import type { ViaCommandHandler } from '../../../com/viaversion/viaversion/commands/ViaCommandHandler.d.ts'
import type { ProtocolManagerImpl } from '../../../com/viaversion/viaversion/protocol/ProtocolManagerImpl.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaManagerImpl extends Object implements ViaManager {
    static builder(): ViaManagerImpl$ViaManagerBuilder;
    static initAndLoad(paramarg0: ViaPlatform<Object>, paramarg1: ViaInjector, paramarg2: ViaCommandHandler, paramarg3: ViaPlatformLoader, paramarg4: () => void[]): ViaManager;
    constructor(arg0: ViaPlatform<Object>, arg1: ViaInjector, arg2: ViaCommandHandler, arg3: ViaPlatformLoader)
    readonly commandHandler: ViaCommandHandler;
    readonly configurationProvider: ConfigurationProvider;
    readonly connectionManager: ConnectionManager;
    // private debugHandler: DebugHandler;
    // private enableListeners: () => void[];
    readonly initialized: boolean;
    readonly injector: ViaInjector;
    readonly loader: ViaPlatformLoader;
    // private mappingLoadingTask: PlatformTask<Object>;
    readonly platform: ViaPlatform<Object>;
    // private postEnableListeners: () => void[];
    readonly protocolManager: ProtocolManagerImpl;
    readonly providers: ViaProviders;
    readonly scheduler: Scheduler;
    readonly subPlatforms: string[];
    addEnableListener(arg0: () => void): void;
    addPostEnableListener(arg0: () => void): void;
    // private checkJavaVersion(): void;
    debugHandler(): DebugHandler;
    destroy(): void;
    getCommandHandler(): ViaCommandHandler;
    getConfigurationProvider(): ConfigurationProvider;
    getConnectionManager(): ConnectionManager;
    getInjector(): ViaInjector;
    getLoader(): ViaPlatformLoader;
    getPlatform(): ViaPlatform<Object>;
    getProtocolManager(): ProtocolManager;
    getProviders(): ViaProviders;
    getScheduler(): Scheduler;
    getSubPlatforms(): string[];
    init(): void;
    isDebug(): boolean;
    isInitialized(): boolean;
    // private loadServerProtocol(): void;
    onServerLoaded(): void;
    setDebug(arg0: boolean): void;
    // private unsupportedSoftwareWarning(): void;
}