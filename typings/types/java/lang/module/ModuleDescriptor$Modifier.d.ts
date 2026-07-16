import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModuleDescriptor$Modifier extends Enum<ModuleDescriptor$Modifier> {
    static AUTOMATIC: ModuleDescriptor$Modifier;
    static MANDATED: ModuleDescriptor$Modifier;
    static OPEN: ModuleDescriptor$Modifier;
    static SYNTHETIC: ModuleDescriptor$Modifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModuleDescriptor$Modifier;
    static values(): ModuleDescriptor$Modifier[];
    private constructor(arg2: number)
    // private mask: number;
    // private mask(): number;
    name(): "OPEN" | "AUTOMATIC" | "SYNTHETIC" | "MANDATED";
}