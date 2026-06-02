import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class InternalResourceRoots$Root$Kind extends Enum<InternalResourceRoots$Root$Kind> {
    static COMPONENT: InternalResourceRoots$Root$Kind;
    static RESOURCE: InternalResourceRoots$Root$Kind;
    static UNVERSIONED: InternalResourceRoots$Root$Kind;
    static VERSIONED: InternalResourceRoots$Root$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InternalResourceRoots$Root$Kind;
    static values(): (Object | null)[];
    private constructor()
    name(): "COMPONENT" | "RESOURCE" | "UNVERSIONED" | "VERSIONED";
}