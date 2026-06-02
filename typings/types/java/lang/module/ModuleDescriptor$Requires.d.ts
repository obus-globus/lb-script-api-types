import type { ModuleDescriptor$Requires$Modifier } from '../../../java/lang/module/ModuleDescriptor$Requires$Modifier.d.ts'
import type { ModuleDescriptor$Version } from '../../../java/lang/module/ModuleDescriptor$Version.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class ModuleDescriptor$Requires extends Object implements Comparable<ModuleDescriptor$Requires> {
    private constructor(arg0: ModuleDescriptor$Requires$Modifier[], arg1: string, arg2: ModuleDescriptor$Version, arg3: boolean)
    private constructor(arg0: ModuleDescriptor$Requires$Modifier[], arg1: string, arg2: ModuleDescriptor$Version, arg3: string)
    // private compiledVersion: ModuleDescriptor$Version;
    // private mods: ModuleDescriptor$Requires$Modifier[];
    // private name: string;
    // private rawCompiledVersion: string;
    accessFlags(): AccessFlag[];
    compareTo(arg0: ModuleDescriptor$Requires): number;
    compiledVersion(): Optional<ModuleDescriptor$Version>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modifiers(): ModuleDescriptor$Requires$Modifier[];
    name(): string;
    rawCompiledVersion(): Optional<string>;
    toString(): string;
}