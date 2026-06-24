import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { FlagImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/FlagImpl.d.ts'
export class MemberKind extends Enum<MemberKind> {
    static DECLARATION: MemberKind;
    static DELEGATION: MemberKind;
    static FAKE_OVERRIDE: MemberKind;
    static SYNTHESIZED: MemberKind;
    static getEntries(): MemberKind[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MemberKind;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private flag: FlagImpl;
    getFlag$org_jetbrains_kotlin_kotlin_metadata(): FlagImpl;
    name(): "DECLARATION" | "FAKE_OVERRIDE" | "DELEGATION" | "SYNTHESIZED";
}