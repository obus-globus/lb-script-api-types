import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { IClassProcessor } from '../../../../../org/spongepowered/asm/launch/IClassProcessor.d.ts'
import type { ContainerHandleModLauncher } from '../../../../../org/spongepowered/asm/launch/platform/container/ContainerHandleModLauncher.d.ts'
import type { ILogger } from '../../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { MixinEnvironment$CompatibilityLevel } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$CompatibilityLevel.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IAdviceProvider } from '../../../../../org/spongepowered/asm/service/IAdviceProvider.d.ts'
import type { IClassBytecodeProvider } from '../../../../../org/spongepowered/asm/service/IClassBytecodeProvider.d.ts'
import type { IClassProvider } from '../../../../../org/spongepowered/asm/service/IClassProvider.d.ts'
import type { IClassTracker } from '../../../../../org/spongepowered/asm/service/IClassTracker.d.ts'
import type { IFeatureValidator } from '../../../../../org/spongepowered/asm/service/IFeatureValidator.d.ts'
import type { IMixinAuditTrail } from '../../../../../org/spongepowered/asm/service/IMixinAuditTrail.d.ts'
import type { IMixinInternal } from '../../../../../org/spongepowered/asm/service/IMixinInternal.d.ts'
import type { ITransformerProvider } from '../../../../../org/spongepowered/asm/service/ITransformerProvider.d.ts'
import type { MixinServiceAbstract } from '../../../../../org/spongepowered/asm/service/MixinServiceAbstract.d.ts'
import type { MixinTransformationHandler } from '../../../../../org/spongepowered/asm/service/modlauncher/MixinTransformationHandler.d.ts'
import type { ModLauncherAuditTrail } from '../../../../../org/spongepowered/asm/service/modlauncher/ModLauncherAuditTrail.d.ts'
import type { ModLauncherClassTracker } from '../../../../../org/spongepowered/asm/service/modlauncher/ModLauncherClassTracker.d.ts'
import type { IConsumer } from '../../../../../org/spongepowered/asm/util/IConsumer.d.ts'
export class MixinServiceModLauncher extends MixinServiceAbstract {
    constructor()
    readonly auditTrail: ModLauncherAuditTrail;
    readonly bytecodeProvider: IClassBytecodeProvider;
    readonly classProvider: IClassProvider;
    readonly classTracker: ModLauncherClassTracker;
    // private initialised: boolean;
    readonly minCompatibilityLevel: MixinEnvironment$CompatibilityLevel;
    // private phaseConsumer: IConsumer<MixinEnvironment$Phase>;
    // private rootContainer: ContainerHandleModLauncher;
    // private transformationHandler: MixinTransformationHandler;
    createLogger(arg0: string): ILogger;
    // private createRootContainer(arg0: string): void;
    getAdviceProvider(): IAdviceProvider;
    getAuditTrail(): IMixinAuditTrail;
    getBytecodeProvider(): IClassBytecodeProvider;
    getClassProvider(): IClassProvider;
    getClassTracker(): IClassTracker;
    getFeatureValidator(): IFeatureValidator;
    getMinCompatibilityLevel(): MixinEnvironment$CompatibilityLevel;
    getName(): string;
    getPlatformAgents(): string[];
    getPrimaryContainer(): ContainerHandleModLauncher;
    getProcessors(): IClassProcessor[];
    getResourceAsStream(arg0: string): InputStream;
    // private getTransformationHandler(): MixinTransformationHandler;
    getTransformerProvider(): ITransformerProvider;
    isValid(): boolean;
    offer(arg0: IMixinInternal): void;
    onInit(arg0: IClassBytecodeProvider): void;
    onStartup(): void;
    wire(arg0: MixinEnvironment$Phase, arg1: IConsumer<MixinEnvironment$Phase>): void;
}