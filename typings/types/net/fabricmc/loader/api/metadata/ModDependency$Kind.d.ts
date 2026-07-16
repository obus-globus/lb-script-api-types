import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ModDependency$Kind extends Enum<ModDependency$Kind> {
    static BREAKS: ModDependency$Kind;
    static CONFLICTS: ModDependency$Kind;
    static DEPENDS: ModDependency$Kind;
    static RECOMMENDS: ModDependency$Kind;
    static SUGGESTS: ModDependency$Kind;
    static parse(paramarg0: string): ModDependency$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModDependency$Kind;
    static values(): ModDependency$Kind[];
    private constructor(arg2: string, arg3: boolean, arg4: boolean)
    readonly key: string;
    readonly positive: boolean;
    readonly soft: boolean;
    getKey(): string;
    isPositive(): boolean;
    isSoft(): boolean;
    name(): "DEPENDS" | "RECOMMENDS" | "SUGGESTS" | "CONFLICTS" | "BREAKS";
}