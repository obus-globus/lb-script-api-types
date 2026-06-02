import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JvmMemberSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMemberSignature.d.ts'
export class JvmMemberSignature$Field extends JvmMemberSignature {
    constructor(arg0: string, arg1: string)
    readonly desc: string;
    readonly name: string;
    asString(): string;
    component1(): string;
    component2(): string;
    equals(arg0: Object | null): boolean;
    getDesc(): string;
    getName(): string;
    hashCode(): number;
}