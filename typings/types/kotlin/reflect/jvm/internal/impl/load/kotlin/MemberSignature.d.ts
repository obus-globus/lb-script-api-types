import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MemberSignature$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/MemberSignature$Companion.d.ts'
export class MemberSignature extends Object {
    static Companion: MemberSignature$Companion;
    private constructor(arg0: string)
    readonly signature: string;
    equals(arg0: Object | null): boolean;
    getSignature(): string;
    hashCode(): number;
    toString(): string;
}