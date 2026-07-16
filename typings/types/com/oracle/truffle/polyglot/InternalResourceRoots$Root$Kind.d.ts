import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class InternalResourceRoots$Root$Kind extends Enum<InternalResourceRoots$Root$Kind> {
    static COMPONENT: InternalResourceRoots$Root$Kind;
    static RESOURCE: InternalResourceRoots$Root$Kind;
    static UNVERSIONED: InternalResourceRoots$Root$Kind;
    static VERSIONED: InternalResourceRoots$Root$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InternalResourceRoots$Root$Kind;
    static values(): InternalResourceRoots$Root$Kind[];
    private constructor()
    name(): "COMPONENT" | "RESOURCE" | "UNVERSIONED" | "VERSIONED";
}