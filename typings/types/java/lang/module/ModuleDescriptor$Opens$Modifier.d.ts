import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModuleDescriptor$Opens$Modifier extends Enum<ModuleDescriptor$Opens$Modifier> {
    static MANDATED: ModuleDescriptor$Opens$Modifier;
    static SYNTHETIC: ModuleDescriptor$Opens$Modifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModuleDescriptor$Opens$Modifier;
    static values(): ModuleDescriptor$Opens$Modifier[];
    private constructor(arg2: number)
    // private mask: number;
    // private mask(): number;
    name(): "SYNTHETIC" | "MANDATED";
}