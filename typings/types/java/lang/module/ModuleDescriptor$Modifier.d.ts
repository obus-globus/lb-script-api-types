import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModuleDescriptor$Modifier extends Enum<ModuleDescriptor$Modifier> {
    static AUTOMATIC: ModuleDescriptor$Modifier;
    static MANDATED: ModuleDescriptor$Modifier;
    static OPEN: ModuleDescriptor$Modifier;
    static SYNTHETIC: ModuleDescriptor$Modifier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleDescriptor$Modifier;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private mask: number;
    // private mask(): number;
    name(): "OPEN" | "AUTOMATIC" | "SYNTHETIC" | "MANDATED";
}