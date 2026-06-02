import type { ModuleDescriptor$Exports$Modifier } from '../../../java/lang/module/ModuleDescriptor$Exports$Modifier.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class ModuleDescriptor$Exports extends Object implements Comparable<ModuleDescriptor$Exports> {
    private constructor(arg0: ModuleDescriptor$Exports$Modifier[], arg1: string, arg2: string[])
    private constructor(arg0: ModuleDescriptor$Exports$Modifier[], arg1: string, arg2: string[], arg3: boolean)
    // private mods: ModuleDescriptor$Exports$Modifier[];
    // private source: string;
    // private targets: string[];
    accessFlags(): AccessFlag[];
    compareTo(arg0: ModuleDescriptor$Exports): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isQualified(): boolean;
    modifiers(): ModuleDescriptor$Exports$Modifier[];
    source(): string;
    targets(): string[];
    toString(): string;
}