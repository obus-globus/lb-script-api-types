import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TrMember$MemberType extends Enum<TrMember$MemberType> {
    static FIELD: TrMember$MemberType;
    static METHOD: TrMember$MemberType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrMember$MemberType;
    static values(): (Object | null)[];
    private constructor()
    name(): "METHOD" | "FIELD";
}