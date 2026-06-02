import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ResourceLeakDetector$Level extends Enum<ResourceLeakDetector$Level> {
    static ADVANCED: ResourceLeakDetector$Level;
    static DISABLED: ResourceLeakDetector$Level;
    static PARANOID: ResourceLeakDetector$Level;
    static SIMPLE: ResourceLeakDetector$Level;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ResourceLeakDetector$Level;
    static values(): (Object | null)[];
    private constructor()
    name(): "DISABLED" | "SIMPLE" | "ADVANCED" | "PARANOID";
}