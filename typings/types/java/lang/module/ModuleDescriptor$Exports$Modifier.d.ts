import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModuleDescriptor$Exports$Modifier extends Enum<ModuleDescriptor$Exports$Modifier> {
    static MANDATED: ModuleDescriptor$Exports$Modifier;
    static SYNTHETIC: ModuleDescriptor$Exports$Modifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModuleDescriptor$Exports$Modifier;
    static values(): ModuleDescriptor$Exports$Modifier[];
    private constructor(arg2: number)
    // private mask: number;
    // private mask(): number;
    name(): "SYNTHETIC" | "MANDATED";
}