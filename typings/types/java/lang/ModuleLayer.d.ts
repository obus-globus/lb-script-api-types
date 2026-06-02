import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../java/lang/Module.d.ts'
import type { ModuleLayer$Controller } from '../../java/lang/ModuleLayer$Controller.d.ts'
import type { Configuration } from '../../java/lang/module/Configuration.d.ts'
import type { Optional } from '../../java/util/Optional.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { ServicesCatalog } from '../../jdk/internal/module/ServicesCatalog.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ModuleLayer extends Object {
    static boot(): ModuleLayer;
    static defineModules(paramarg0: Configuration, paramarg1: ModuleLayer[], paramarg2: (param0: string) => ClassLoader): ModuleLayer$Controller;
    static defineModulesWithManyLoaders(paramarg0: Configuration, paramarg1: ModuleLayer[], paramarg2: ClassLoader): ModuleLayer$Controller;
    static defineModulesWithOneLoader(paramarg0: Configuration, paramarg1: ModuleLayer[], paramarg2: ClassLoader): ModuleLayer$Controller;
    static empty(): ModuleLayer;
    private constructor(arg0: Configuration, arg1: ModuleLayer[], arg2: (param0: string) => ClassLoader)
    // private allLayers: ModuleLayer[];
    // private cf: Configuration;
    // private modules: Module[];
    // private nameToModule: { [key: string]: Module };
    // private parents: ModuleLayer[];
    // private servicesCatalog: ServicesCatalog;
    addEnableNativeAccess(arg0: string): boolean;
    bindToLoader(arg0: ClassLoader): void;
    configuration(): Configuration;
    defineModules(arg0: Configuration, arg1: (param0: string) => ClassLoader): ModuleLayer;
    defineModulesWithManyLoaders(arg0: Configuration, arg1: ClassLoader): ModuleLayer;
    defineModulesWithOneLoader(arg0: Configuration, arg1: ClassLoader): ModuleLayer;
    findLoader(arg0: string): ClassLoader;
    findModule(arg0: string): Optional<Module>;
    getServicesCatalog(): ServicesCatalog;
    layers(): Stream<ModuleLayer>;
    modules(): Module[];
    parents(): ModuleLayer[];
    toString(): string;
}