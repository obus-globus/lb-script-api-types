import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModuleElement$DirectiveKind extends Enum<ModuleElement$DirectiveKind> {
    static EXPORTS: ModuleElement$DirectiveKind;
    static OPENS: ModuleElement$DirectiveKind;
    static PROVIDES: ModuleElement$DirectiveKind;
    static REQUIRES: ModuleElement$DirectiveKind;
    static USES: ModuleElement$DirectiveKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModuleElement$DirectiveKind;
    static values(): ModuleElement$DirectiveKind[];
    private constructor()
    name(): "REQUIRES" | "EXPORTS" | "OPENS" | "USES" | "PROVIDES";
}