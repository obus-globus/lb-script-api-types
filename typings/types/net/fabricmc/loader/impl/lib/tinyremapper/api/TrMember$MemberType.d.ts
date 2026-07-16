import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TrMember$MemberType extends Enum<TrMember$MemberType> {
    static FIELD: TrMember$MemberType;
    static METHOD: TrMember$MemberType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TrMember$MemberType;
    static values(): TrMember$MemberType[];
    private constructor()
    name(): "METHOD" | "FIELD";
}