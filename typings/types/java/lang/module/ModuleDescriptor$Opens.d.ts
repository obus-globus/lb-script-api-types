import type { ModuleDescriptor$Opens$Modifier } from '../../../java/lang/module/ModuleDescriptor$Opens$Modifier.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class ModuleDescriptor$Opens extends Object implements Comparable<ModuleDescriptor$Opens> {
    private constructor(arg0: ModuleDescriptor$Opens$Modifier[], arg1: string, arg2: string[])
    private constructor(arg0: ModuleDescriptor$Opens$Modifier[], arg1: string, arg2: string[], arg3: boolean)
    // private mods: ModuleDescriptor$Opens$Modifier[];
    // private source: string;
    // private targets: string[];
    accessFlags(): AccessFlag[];
    compareTo(arg0: ModuleDescriptor$Opens): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isQualified(): boolean;
    modifiers(): ModuleDescriptor$Opens$Modifier[];
    source(): string;
    targets(): string[];
    toString(): string;
}