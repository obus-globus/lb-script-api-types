import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JvmBuiltInsCustomizer$JDKMemberStatus extends Enum<JvmBuiltInsCustomizer$JDKMemberStatus> {
    static DEPRECATED_LIST_METHODS: JvmBuiltInsCustomizer$JDKMemberStatus;
    static DROP: JvmBuiltInsCustomizer$JDKMemberStatus;
    static HIDDEN: JvmBuiltInsCustomizer$JDKMemberStatus;
    static NOT_CONSIDERED: JvmBuiltInsCustomizer$JDKMemberStatus;
    static VISIBLE: JvmBuiltInsCustomizer$JDKMemberStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): JvmBuiltInsCustomizer$JDKMemberStatus;
    static values(): JvmBuiltInsCustomizer$JDKMemberStatus[];
    private constructor()
    name(): "HIDDEN" | "VISIBLE" | "DEPRECATED_LIST_METHODS" | "NOT_CONSIDERED" | "DROP";
}