import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { GlobalProperties$Keys } from '../../../../org/spongepowered/asm/launch/GlobalProperties$Keys.d.ts'
import type { Level } from '../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { MixinEnvironment$CompatibilityLevel } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$CompatibilityLevel.d.ts'
import type { MixinEnvironment$Option } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Option.d.ts'
import type { MixinEnvironment$Phase } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { MixinEnvironment$Side } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Side.d.ts'
import type { MixinEnvironment$TokenProviderWrapper } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$TokenProviderWrapper.d.ts'
import type { IEnvironmentTokenProvider } from '../../../../org/spongepowered/asm/mixin/extensibility/IEnvironmentTokenProvider.d.ts'
import type { IMixinTransformer } from '../../../../org/spongepowered/asm/mixin/transformer/IMixinTransformer.d.ts'
import type { RemapperChain } from '../../../../org/spongepowered/asm/obfuscation/RemapperChain.d.ts'
import type { IMixinService } from '../../../../org/spongepowered/asm/service/IMixinService.d.ts'
import type { ITransformer } from '../../../../org/spongepowered/asm/service/ITransformer.d.ts'
import type { ITokenProvider } from '../../../../org/spongepowered/asm/util/ITokenProvider.d.ts'
import type { Profiler } from '../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
export class MixinEnvironment extends Object implements ITokenProvider {
    static getCompatibilityLevel(): MixinEnvironment$CompatibilityLevel;
    static getCurrentEnvironment(): MixinEnvironment;
    static getDefaultEnvironment(): MixinEnvironment;
    static getEnvironment(paramarg0: MixinEnvironment$Phase): MixinEnvironment;
    static getMinCompatibilityLevel(): MixinEnvironment$CompatibilityLevel;
    static getProfiler(): Profiler;
    static init(paramarg0: MixinEnvironment$Phase): void;
    static setCompatibilityLevel(paramarg0: MixinEnvironment$CompatibilityLevel): void;
    constructor(arg0: MixinEnvironment$Phase)
    // private configsKey: GlobalProperties$Keys;
    // private internalTokens: JavaMap<string, number>;
    readonly obfuscationContext: string;
    // private options: boolean[];
    readonly phase: MixinEnvironment$Phase;
    readonly remappers: RemapperChain;
    // private service: IMixinService;
    readonly side: MixinEnvironment$Side;
    // private tokenProviderClasses: string[];
    // private tokenProviders: MixinEnvironment$TokenProviderWrapper[];
    addConfiguration(arg0: string): MixinEnvironment;
    addTransformerExclusion(arg0: string): void;
    audit(): void;
    getActiveTransformer(): Object;
    // private getCodeSource(): string;
    getErrorHandlerClasses(): string[];
    getMixinConfigs(): string[];
    getObfuscationContext(): string;
    getOption(arg0: MixinEnvironment$Option): boolean;
    getOption<E extends Enum<E>>(arg0: MixinEnvironment$Option, arg1: E): E;
    getOptionValue(arg0: MixinEnvironment$Option): string;
    getPhase(): MixinEnvironment$Phase;
    getRefmapObfuscationContext(): string;
    getRemappers(): RemapperChain;
    getSide(): MixinEnvironment$Side;
    getToken(arg0: string): number;
    getTransformers(): ITransformer[];
    // private getVerboseLoggingLevel(): Level;
    getVersion(): string;
    // private printHeader(arg0: Object): void;
    registerConfig(arg0: string): void;
    registerTokenProvider(arg0: IEnvironmentTokenProvider): MixinEnvironment;
    registerTokenProviderClass(arg0: string): MixinEnvironment;
    setActiveTransformer(arg0: IMixinTransformer): void;
    setObfuscationContext(arg0: string): void;
    setOption(arg0: MixinEnvironment$Option, arg1: boolean): void;
    setSide(arg0: MixinEnvironment$Side): MixinEnvironment;
    toString(): string;
}