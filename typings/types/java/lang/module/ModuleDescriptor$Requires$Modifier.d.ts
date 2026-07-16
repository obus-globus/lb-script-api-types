import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModuleDescriptor$Requires$Modifier extends Enum<ModuleDescriptor$Requires$Modifier> {
    static MANDATED: ModuleDescriptor$Requires$Modifier;
    static STATIC: ModuleDescriptor$Requires$Modifier;
    static SYNTHETIC: ModuleDescriptor$Requires$Modifier;
    static TRANSITIVE: ModuleDescriptor$Requires$Modifier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleDescriptor$Requires$Modifier;
    static values(): ModuleDescriptor$Requires$Modifier[];
    private constructor(arg2: number)
    // private mask: number;
    // private mask(): number;
    name(): "TRANSITIVE" | "STATIC" | "SYNTHETIC" | "MANDATED";
}