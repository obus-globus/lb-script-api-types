import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Configuration } from '../../../java/lang/module/Configuration.d.ts'
import type { ModuleDescriptor } from '../../../java/lang/module/ModuleDescriptor.d.ts'
import type { ModuleFinder } from '../../../java/lang/module/ModuleFinder.d.ts'
import type { ModuleReference } from '../../../java/lang/module/ModuleReference.d.ts'
import type { ResolvedModule } from '../../../java/lang/module/ResolvedModule.d.ts'
import type { ModuleTarget } from '../../../jdk/internal/module/ModuleTarget.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Resolver extends Object {
    constructor(arg0: ModuleFinder, arg1: Configuration[], arg2: ModuleFinder, arg3: PrintStream)
    // private afterFinder: ModuleFinder;
    // private beforeFinder: ModuleFinder;
    // private haveAllAutomaticModules: boolean;
    // private nameToReference: { [key: string]: ModuleReference };
    // private parents: Configuration[];
    // private targetPlatform: string;
    // private traceOutput: PrintStream;
    // private visitPath: ModuleDescriptor[];
    // private visited: ModuleDescriptor[];
    // private addFoundAutomaticModules(): ModuleReference[];
    // private addFoundModule(arg0: ModuleReference): void;
    bind(): Resolver;
    bind(arg0: boolean): Resolver;
    // private checkExportSuppliers(arg0: Map<ResolvedModule, ResolvedModule[]>): void;
    // private checkHashes(): void;
    // private checkTargetPlatform(arg0: string, arg1: ModuleTarget): void;
    // private computeIfAbsent(arg0: { [key: string]: ResolvedModule }, arg1: string, arg2: Configuration, arg3: ModuleReference): ResolvedModule;
    // private cycleAsString(arg0: ModuleDescriptor): string;
    // private detectCycles(): void;
    // private failTwoSuppliers(arg0: ModuleDescriptor, arg1: string, arg2: ModuleDescriptor, arg3: ModuleDescriptor): void;
    // private findAll(): ModuleReference[];
    // private findInParent(arg0: string): ResolvedModule;
    // private findWithAfterFinder(arg0: string): ModuleReference;
    // private findWithBeforeFinder(arg0: string): ModuleReference;
    finish(arg0: Configuration): Map<ResolvedModule, ResolvedModule[]>;
    // private isTracing(): boolean;
    // private makeGraph(arg0: Configuration): Map<ResolvedModule, ResolvedModule[]>;
    // private nameAndInfo(arg0: ModuleReference): string;
    // private requiresStaticMissingModule(arg0: ModuleDescriptor, arg1: ResolvedModule[]): boolean;
    // private resolve(arg0: ModuleDescriptor[]): ModuleDescriptor[];
    resolve(arg0: E[]): Resolver;
    targetPlatform(): string;
    // private trace(arg0: string, arg1: Object[]): void;
    // private visit(arg0: ModuleDescriptor): void;
}