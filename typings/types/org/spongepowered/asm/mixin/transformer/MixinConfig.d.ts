import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ILogger } from '../../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { Level } from '../../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { MixinEnvironment$CompatibilityLevel } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$CompatibilityLevel.d.ts'
import type { IMixinConfig } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { IMixinConfigPlugin } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigPlugin.d.ts'
import type { IMixinConfigSource } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfigSource.d.ts'
import type { IReferenceMapper } from '../../../../../org/spongepowered/asm/mixin/refmap/IReferenceMapper.d.ts'
import type { Config } from '../../../../../org/spongepowered/asm/mixin/transformer/Config.d.ts'
import type { MixinConfig$IListener } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig$IListener.d.ts'
import type { MixinConfig$InjectorOptions } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig$InjectorOptions.d.ts'
import type { MixinConfig$OverwriteOptions } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig$OverwriteOptions.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { PluginHandle } from '../../../../../org/spongepowered/asm/mixin/transformer/PluginHandle.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { IMixinService } from '../../../../../org/spongepowered/asm/service/IMixinService.d.ts'
export class MixinConfig extends Object implements Comparable<MixinConfig>, IMixinConfig {
    static DEFAULT_PRIORITY: number;
    private constructor()
    // private compatibility: string;
    // private compatibilityLevel: MixinEnvironment$CompatibilityLevel;
    // private decorations: { [key: string]: Object };
    // private env: MixinEnvironment;
    readonly handle: Config;
    // private initialised: boolean;
    // private injectorOptions: MixinConfig$InjectorOptions;
    // private listeners: MixinConfig$IListener[];
    // private logger: ILogger;
    // private mixinClasses: string[];
    // private mixinClassesClient: string[];
    // private mixinClassesServer: string[];
    // private mixinMapping: { [key: string]: MixinInfo[] };
    readonly mixinPackage: string;
    // private mixinPriority: number;
    // private mixins: MixinInfo[];
    readonly name: string;
    // private order: number;
    // private overwriteOptions: MixinConfig$OverwriteOptions;
    // private parent: MixinConfig;
    // private parentName: string;
    // private pendingMixins: MixinInfo[];
    readonly plugin: PluginHandle;
    // private pluginClassName: string;
    // private prepared: boolean;
    readonly priority: number;
    // private refMapper: IReferenceMapper;
    // private refMapperConfig: string;
    // private refMapperWrapper: string;
    readonly required: boolean;
    // private requiredFeatures: string[];
    // private requiredValue: boolean;
    // private selector: string;
    // private service: IMixinService;
    // private setSourceFile: boolean;
    readonly source: IMixinConfigSource;
    readonly unhandledTargets: string[];
    readonly verboseLogging: boolean;
    // private version: string;
    // private visited: boolean;
    // private warnedClassVersion: number;
    addListener(arg0: MixinConfig$IListener): void;
    assignParent(arg0: Config): boolean;
    checkCompatibilityLevel(arg0: MixinInfo, arg1: number, arg2: number): void;
    // private checkFeatures(): boolean;
    // private checkVersion(): boolean;
    compareTo(arg0: MixinConfig): number;
    conformOverwriteVisibility(): boolean;
    decorate<V extends Object | number | string | boolean>(arg0: string, arg1: V): void;
    // private findExtensionClass(arg0: string, arg1: Class<Object>, arg2: string): Class<Object>;
    getClasses(): string[];
    getCleanSourceId(): string;
    getDeclaredMixinCount(): number;
    getDecoration<V extends Object | number | string | boolean>(arg0: string): V;
    getDefaultInjectorGroup(): string;
    getDefaultMixinPriority(): number;
    getDefaultRequiredInjections(): number;
    getEnvironment(): MixinEnvironment;
    getHandle(): Config;
    getLoggingLevel(): Level;
    getMaxShiftByValue(): number;
    getMixinCount(): number;
    getMixinPackage(): string;
    getMixinsFor(arg0: string): MixinInfo[];
    getName(): string;
    getParent(): MixinConfig;
    getParentName(): string;
    getPlugin(): IMixinConfigPlugin;
    getPriority(): number;
    getReferenceMapper(): IReferenceMapper;
    getSource(): IMixinConfigSource;
    getTargets(): string[];
    getTargetsSet(): string[];
    getUnhandledTargets(): string[];
    hasDecoration(arg0: string): boolean;
    hasMixinsFor(arg0: string): boolean;
    hasPendingMixinsFor(arg0: string): boolean;
    // private initCompatibilityLevel(): void;
    // private initDynamicSelector(arg0: string, arg1: string): void;
    // private initExtensions(): void;
    // private initInjectionPoint(arg0: string, arg1: string): void;
    // private initPriority(arg0: number, arg1: number): void;
    isRequired(): boolean;
    isVerboseLogging(): boolean;
    isVisited(): boolean;
    // private mixinsFor(arg0: string): MixinInfo[];
    // private onLoad(arg0: IMixinService, arg1: string, arg2: MixinEnvironment, arg3: IMixinConfigSource): boolean;
    onSelect(): void;
    packageMatch(arg0: string): boolean;
    // private parseSelector(arg0: string, arg1: MixinEnvironment): MixinEnvironment;
    postApply(arg0: string, arg1: ClassNode): void;
    // private postInit(): boolean;
    postInitialise(arg0: Extensions): void;
    prepare(arg0: Extensions): void;
    // private prepareMixins(arg0: string, arg1: string[], arg2: boolean, arg3: Extensions): void;
    reloadMixin(arg0: string, arg1: ClassNode): string[];
    remapClassName(arg0: string, arg1: string): string;
    // private removeMixin(arg0: MixinInfo): void;
    requireOverwriteAnnotations(): boolean;
    select(arg0: MixinEnvironment): boolean;
    shouldSetSourceFile(): boolean;
    toString(): string;
}