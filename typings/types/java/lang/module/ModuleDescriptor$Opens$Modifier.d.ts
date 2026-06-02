import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ModuleDescriptor$Opens$Modifier extends Enum<ModuleDescriptor$Opens$Modifier> {
    static MANDATED: ModuleDescriptor$Opens$Modifier;
    static SYNTHETIC: ModuleDescriptor$Opens$Modifier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleDescriptor$Opens$Modifier;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private mask: number;
    // private mask(): number;
    name(): "SYNTHETIC" | "MANDATED";
}