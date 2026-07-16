import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ResourceLeakDetector$Level extends Enum<ResourceLeakDetector$Level> {
    static ADVANCED: ResourceLeakDetector$Level;
    static DISABLED: ResourceLeakDetector$Level;
    static PARANOID: ResourceLeakDetector$Level;
    static SIMPLE: ResourceLeakDetector$Level;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResourceLeakDetector$Level;
    static values(): ResourceLeakDetector$Level[];
    private constructor()
    name(): "DISABLED" | "SIMPLE" | "ADVANCED" | "PARANOID";
}