import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DependencyOverrides$Operation extends Enum<DependencyOverrides$Operation> {
    static ADD: DependencyOverrides$Operation;
    static REMOVE: DependencyOverrides$Operation;
    static REPLACE: DependencyOverrides$Operation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DependencyOverrides$Operation;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private operator: string;
    name(): "ADD" | "REMOVE" | "REPLACE";
}