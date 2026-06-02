import type { ViaVersionCommand } from '../../../../com/viaversion/viaversion/api/command/ViaVersionCommand.d.ts'
import type { ConfigurationProvider } from '../../../../com/viaversion/viaversion/api/configuration/ConfigurationProvider.d.ts'
import type { ConnectionManager } from '../../../../com/viaversion/viaversion/api/connection/ConnectionManager.d.ts'
import type { DebugHandler } from '../../../../com/viaversion/viaversion/api/debug/DebugHandler.d.ts'
import type { ViaInjector } from '../../../../com/viaversion/viaversion/api/platform/ViaInjector.d.ts'
import type { ViaPlatform } from '../../../../com/viaversion/viaversion/api/platform/ViaPlatform.d.ts'
import type { ViaPlatformLoader } from '../../../../com/viaversion/viaversion/api/platform/ViaPlatformLoader.d.ts'
import type { ViaProviders } from '../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { ProtocolManager } from '../../../../com/viaversion/viaversion/api/protocol/ProtocolManager.d.ts'
import type { Scheduler } from '../../../../com/viaversion/viaversion/api/scheduler/Scheduler.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ViaManager extends Object{
    addEnableListener(arg0: () => void): void;
    addPostEnableListener(arg0: () => void): void;
    debugHandler(): DebugHandler;
    getCommandHandler(): ViaVersionCommand;
    getConfigurationProvider(): ConfigurationProvider;
    getConnectionManager(): ConnectionManager;
    getInjector(): ViaInjector;
    getLoader(): ViaPlatformLoader;
    getPlatform(): ViaPlatform<Object>;
    getProtocolManager(): ProtocolManager;
    getProviders(): ViaProviders;
    getScheduler(): Scheduler;
    getSubPlatforms(): string[];
    isDebug(): boolean;
    isInitialized(): boolean;
    setDebug(arg0: boolean): void;
}