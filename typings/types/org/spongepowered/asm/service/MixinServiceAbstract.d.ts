import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IMixinPlatformServiceAgent } from '../../../../org/spongepowered/asm/launch/platform/IMixinPlatformServiceAgent.d.ts'
import type { IContainerHandle } from '../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
import type { ILogger } from '../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { MixinEnvironment$CompatibilityLevel } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$CompatibilityLevel.d.ts'
import type { MixinEnvironment$Phase } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IMixinInternal } from '../../../../org/spongepowered/asm/service/IMixinInternal.d.ts'
import type { IMixinService } from '../../../../org/spongepowered/asm/service/IMixinService.d.ts'
import type { IConsumer } from '../../../../org/spongepowered/asm/util/IConsumer.d.ts'
import type { ReEntranceLock } from '../../../../org/spongepowered/asm/util/ReEntranceLock.d.ts'
import type { ImmutableList$Builder } from '../../../../org/spongepowered/include/com/google/common/collect/ImmutableList$Builder.d.ts'
export abstract class MixinServiceAbstract extends Object implements IMixinService {
    constructor()
    // private internals: Map<Class<IMixinInternal>, IMixinInternal>;
    // private lock: ReEntranceLock;
    // private serviceAgents: IMixinPlatformServiceAgent[];
    readonly sideName: string;
    beginPhase(): void;
    checkEnv(arg0: Object): void;
    createLogger(arg0: string): ILogger;
    getContainersFromAgents(arg0: ImmutableList$Builder<IContainerHandle>): void;
    getInitialPhase(): MixinEnvironment$Phase;
    getInternal<T extends IMixinInternal>(arg0: Class<T>): T;
    getLogger(arg0: string): ILogger;
    getMaxCompatibilityLevel(): MixinEnvironment$CompatibilityLevel;
    getMinCompatibilityLevel(): MixinEnvironment$CompatibilityLevel;
    getMixinContainers(): E[];
    getReEntranceLock(): ReEntranceLock;
    // private getServiceAgents(): IMixinPlatformServiceAgent[];
    getSideName(): string;
    init(): void;
    offer(arg0: IMixinInternal): void;
    prepare(): void;
    // private registerInternal(arg0: IMixinInternal, arg1: Class<Object>): void;
    unwire(): void;
    wire(arg0: MixinEnvironment$Phase, arg1: IConsumer<MixinEnvironment$Phase>): void;
}