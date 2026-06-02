import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandLineOptions } from '../../../../../org/spongepowered/asm/launch/platform/CommandLineOptions.d.ts'
import type { MixinConnectorManager } from '../../../../../org/spongepowered/asm/launch/platform/MixinConnectorManager.d.ts'
import type { MixinContainer } from '../../../../../org/spongepowered/asm/launch/platform/MixinContainer.d.ts'
import type { IContainerHandle } from '../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
import type { IMixinConfigSource } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigSource.d.ts'
export class MixinPlatformManager extends Object {
    constructor()
    // private connectors: MixinConnectorManager;
    // private containers: Map<IContainerHandle, MixinContainer>;
    // private injected: boolean;
    // private prepared: boolean;
    // private primaryContainer: MixinContainer;
    addConfig(arg0: string, arg1: IMixinConfigSource): void;
    addConnector(arg0: string): void;
    addContainer(arg0: IContainerHandle): MixinContainer;
    // private addNestedContainers(arg0: IContainerHandle): void;
    addTokenProvider(arg0: string): void;
    // private createContainerFor(arg0: IContainerHandle): MixinContainer;
    getLaunchTarget(): string;
    getPhaseProviderClasses(): E[];
    init(): void;
    inject(): void;
    prepare(arg0: CommandLineOptions): void;
    // private scanForContainers(): void;
    setCompatibilityLevel(arg0: string): void;
}