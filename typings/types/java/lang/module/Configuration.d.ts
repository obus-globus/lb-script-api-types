import type { ModuleDescriptor } from '../../../java/lang/module/ModuleDescriptor.d.ts'
import type { ModuleFinder } from '../../../java/lang/module/ModuleFinder.d.ts'
import type { ResolvedModule } from '../../../java/lang/module/ResolvedModule.d.ts'
import type { Resolver } from '../../../java/lang/module/Resolver.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Configuration extends Object {
    static empty(): Configuration;
    static resolve(paramarg0: ModuleFinder, paramarg1: Configuration[], paramarg2: ModuleFinder, paramarg3: E[]): Configuration;
    static resolveAndBind(paramarg0: ModuleFinder, paramarg1: Configuration[], paramarg2: ModuleFinder, paramarg3: E[]): Configuration;
    private constructor()
    constructor(arg0: ModuleFinder, arg1: { [key: string]: string[] })
    private constructor(arg0: Configuration[], arg1: Resolver)
    // private allConfigurations: Configuration[];
    // private graph: Map<ResolvedModule, ResolvedModule[]>;
    // private modules: ResolvedModule[];
    // private nameToModule: { [key: string]: ResolvedModule };
    // private parents: Configuration[];
    // private targetPlatform: string;
    configurations(): Stream<Configuration>;
    descriptors(): ModuleDescriptor[];
    findModule(arg0: string): Optional<ResolvedModule>;
    modules(): ResolvedModule[];
    parents(): Configuration[];
    reads(arg0: ResolvedModule): ResolvedModule[];
    resolve(arg0: ModuleFinder, arg1: ModuleFinder, arg2: E[]): Configuration;
    resolveAndBind(arg0: ModuleFinder, arg1: ModuleFinder, arg2: E[]): Configuration;
    targetPlatform(): string;
    toString(): string;
}