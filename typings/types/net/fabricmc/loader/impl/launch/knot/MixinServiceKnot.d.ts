import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IContainerHandle } from '../../../../../../org/spongepowered/asm/launch/platform/container/IContainerHandle.d.ts'
import type { ILogger } from '../../../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { MixinEnvironment$CompatibilityLevel } from '../../../../../../org/spongepowered/asm/mixin/MixinEnvironment$CompatibilityLevel.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IAdviceProvider } from '../../../../../../org/spongepowered/asm/service/IAdviceProvider.d.ts'
import type { IClassBytecodeProvider } from '../../../../../../org/spongepowered/asm/service/IClassBytecodeProvider.d.ts'
import type { IClassProvider } from '../../../../../../org/spongepowered/asm/service/IClassProvider.d.ts'
import type { IClassTracker } from '../../../../../../org/spongepowered/asm/service/IClassTracker.d.ts'
import type { IFeatureValidator } from '../../../../../../org/spongepowered/asm/service/IFeatureValidator.d.ts'
import type { IMixinAuditTrail } from '../../../../../../org/spongepowered/asm/service/IMixinAuditTrail.d.ts'
import type { IMixinInternal } from '../../../../../../org/spongepowered/asm/service/IMixinInternal.d.ts'
import type { IMixinService } from '../../../../../../org/spongepowered/asm/service/IMixinService.d.ts'
import type { ITransformer } from '../../../../../../org/spongepowered/asm/service/ITransformer.d.ts'
import type { ITransformerProvider } from '../../../../../../org/spongepowered/asm/service/ITransformerProvider.d.ts'
import type { ReEntranceLock } from '../../../../../../org/spongepowered/asm/util/ReEntranceLock.d.ts'
export class MixinServiceKnot extends Object implements IClassBytecodeProvider, IClassProvider, IClassTracker, IMixinService, ITransformerProvider {
    constructor()
    // private lock: ReEntranceLock;
    addTransformerExclusion(arg0: string): void;
    beginPhase(): void;
    checkEnv(arg0: Object): void;
    findAgentClass(arg0: string, arg1: boolean): Class<Object>;
    findClass(arg0: string): Class<Object>;
    findClass(arg0: string, arg1: boolean): Class<Object>;
    getAdviceProvider(): IAdviceProvider;
    getAuditTrail(): IMixinAuditTrail;
    getBytecodeProvider(): IClassBytecodeProvider;
    getClassBytes(arg0: string, arg1: boolean): number[];
    getClassBytes(arg0: string, arg1: string): number[];
    getClassNode(arg0: string): ClassNode;
    getClassNode(arg0: string, arg1: boolean): ClassNode;
    getClassNode(arg0: string, arg1: boolean, arg2: number): ClassNode;
    getClassPath(): URL[];
    getClassProvider(): IClassProvider;
    getClassRestrictions(arg0: string): string;
    getClassTracker(): IClassTracker;
    getDelegatedTransformers(): ITransformer[];
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
    getTransformers(): ITransformer[];
    init(): void;
    isClassLoaded(arg0: string): boolean;
    isValid(): boolean;
    offer(arg0: IMixinInternal): void;
    prepare(): void;
    registerInvalidClass(arg0: string): void;
}