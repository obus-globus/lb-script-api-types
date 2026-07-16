import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BeforeInvoke$SearchType extends Enum<BeforeInvoke$SearchType> {
    static PERMISSIVE: BeforeInvoke$SearchType;
    static STRICT: BeforeInvoke$SearchType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BeforeInvoke$SearchType;
    static values(): BeforeInvoke$SearchType[];
    private constructor()
    name(): "STRICT" | "PERMISSIVE";
}