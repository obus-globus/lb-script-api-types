import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ILogger } from '../../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { Level } from '../../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IMixinConfig } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { InterfaceInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/InterfaceInfo.d.ts'
import type { MixinConfig } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig.d.ts'
import type { MixinInfo$DeclaredTarget } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$DeclaredTarget.d.ts'
import type { MixinInfo$MixinClassNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinClassNode.d.ts'
import type { MixinInfo$State } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$State.d.ts'
import type { MixinInfo$SubType } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$SubType.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { PluginHandle } from '../../../../../org/spongepowered/asm/mixin/transformer/PluginHandle.d.ts'
import type { TargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/TargetClassContext.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { IMixinService } from '../../../../../org/spongepowered/asm/service/IMixinService.d.ts'
import type { Profiler } from '../../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
export class MixinInfo extends Object implements Comparable<MixinInfo>, IMixinInfo {
    constructor(arg0: IMixinService, arg1: MixinConfig, arg2: string, arg3: PluginHandle, arg4: boolean, arg5: Extensions)
    readonly className: string;
    // private declaredTargets: MixinInfo$DeclaredTarget[];
    // private extensions: Extensions;
    // private info: ClassInfo;
    // private logger: ILogger;
    readonly name: string;
    // private order: number;
    // private parent: MixinConfig;
    // private pendingState: MixinInfo$State;
    readonly phase: MixinEnvironment$Phase;
    // private plugin: PluginHandle;
    readonly priority: number;
    // private profiler: Profiler;
    // private service: IMixinService;
    // private state: MixinInfo$State;
    // private strict: boolean;
    // private targetClassNames: string[];
    readonly targetClasses: ClassInfo[];
    // private type: MixinInfo$SubType;
    readonly virtual: boolean;
    compareTo(arg0: MixinInfo): number;
    createContextFor(arg0: TargetClassContext): MixinTargetContext;
    getClassBytes(): number[];
    getClassInfo(): ClassInfo;
    getClassName(): string;
    getClassNode(arg0: number): MixinInfo$MixinClassNode;
    getClassRef(): string;
    getClassVersion(): number;
    getConfig(): IMixinConfig;
    getDeclaredTargetClasses(): string[];
    getExtensions(): Extensions;
    getInnerClasses(): string[];
    getInterfaces(): string[];
    getLoggingLevel(): Level;
    getName(): string;
    getParent(): MixinConfig;
    getPhase(): MixinEnvironment$Phase;
    getPriority(): number;
    getSoftImplements(): InterfaceInfo[];
    // private getState(): MixinInfo$State;
    // private getTargetClass(arg0: MixinInfo$DeclaredTarget): ClassInfo;
    getTargetClasses(): string[];
    getTargets(): ClassInfo[];
    // private handleTargetError(arg0: string, arg1: boolean): void;
    hasDeclaredTarget(arg0: string): boolean;
    isAccessor(): boolean;
    isDetachedSuper(): boolean;
    isLoadable(): boolean;
    // private isReloading(): boolean;
    isRequired(): boolean;
    isUnique(): boolean;
    isVirtual(): boolean;
    // private loadMixinClass(arg0: string): ClassNode;
    parseTargets(): void;
    postApply(arg0: string, arg1: ClassNode): void;
    preApply(arg0: string, arg1: ClassNode): void;
    readDeclaredTargets(arg0: MixinInfo$MixinClassNode, arg1: boolean): MixinInfo$DeclaredTarget[];
    readPriority(arg0: ClassNode): number;
    readPseudo(arg0: ClassNode): boolean;
    // private readTargetClasses(arg0: MixinInfo$DeclaredTarget[]): ClassInfo[];
    readTargetClasses(arg0: MixinInfo$MixinClassNode, arg1: boolean): ClassInfo[];
    // private readTargets(arg0: AnnotationNode): Object[];
    reloadMixin(arg0: ClassNode): void;
    remapClassName(arg0: string): string;
    // private shouldApplyMixin(arg0: boolean, arg1: string): boolean;
    toString(): string;
    validate(): void;
    validateInnerClass(arg0: ClassNode): void;
}