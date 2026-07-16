import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DependencyOverrides$Operation extends Enum<DependencyOverrides$Operation> {
    static ADD: DependencyOverrides$Operation;
    static REMOVE: DependencyOverrides$Operation;
    static REPLACE: DependencyOverrides$Operation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DependencyOverrides$Operation;
    static values(): DependencyOverrides$Operation[];
    private constructor(arg2: string)
    // private operator: string;
    name(): "ADD" | "REMOVE" | "REPLACE";
}