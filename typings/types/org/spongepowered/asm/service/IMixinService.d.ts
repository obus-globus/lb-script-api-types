import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IContainerHandle } from '../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
import type { ILogger } from '../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { MixinEnvironment$CompatibilityLevel } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$CompatibilityLevel.d.ts'
import type { MixinEnvironment$Phase } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IAdviceProvider } from '../../../../org/spongepowered/asm/service/IAdviceProvider.d.ts'
import type { IClassBytecodeProvider } from '../../../../org/spongepowered/asm/service/IClassBytecodeProvider.d.ts'
import type { IClassProvider } from '../../../../org/spongepowered/asm/service/IClassProvider.d.ts'
import type { IClassTracker } from '../../../../org/spongepowered/asm/service/IClassTracker.d.ts'
import type { IFeatureValidator } from '../../../../org/spongepowered/asm/service/IFeatureValidator.d.ts'
import type { IMixinAuditTrail } from '../../../../org/spongepowered/asm/service/IMixinAuditTrail.d.ts'
import type { IMixinInternal } from '../../../../org/spongepowered/asm/service/IMixinInternal.d.ts'
import type { ITransformerProvider } from '../../../../org/spongepowered/asm/service/ITransformerProvider.d.ts'
import type { ReEntranceLock } from '../../../../org/spongepowered/asm/util/ReEntranceLock.d.ts'
export interface IMixinService extends Object{
    beginPhase(): void;
    checkEnv(arg0: Object): void;
    getAdviceProvider(): IAdviceProvider;
    getAuditTrail(): IMixinAuditTrail;
    getBytecodeProvider(): IClassBytecodeProvider;
    getClassProvider(): IClassProvider;
    getClassTracker(): IClassTracker;
    getFeatureValidator(): IFeatureValidator;
    getInitialPhase(): MixinEnvironment$Phase;
    getLogger(arg0: string): ILogger;
    getMaxCompatibilityLevel(): MixinEnvironment$CompatibilityLevel;
    getMinCompatibilityLevel(): MixinEnvironment$CompatibilityLevel;
    getMixinContainers(): IContainerHandle[];
    getName(): string;
    getPlatformAgents(): string[];
    getPrimaryContainer(): IContainerHandle;
    getReEntranceLock(): ReEntranceLock;
    getResourceAsStream(arg0: string): InputStream;
    getSideName(): string;
    getTransformerProvider(): ITransformerProvider;
    init(): void;
    isValid(): boolean;
    offer(arg0: IMixinInternal): void;
    prepare(): void;
}