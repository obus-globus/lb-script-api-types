import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmMemberSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMemberSignature.d.ts'
export class JvmMethodSignature extends JvmMemberSignature {
    constructor(arg0: string, arg1: string)
    readonly descriptor: string;
    readonly name: string;
    equals(arg0: Object | null): boolean;
    getDescriptor(): string;
    getName(): string;
    hashCode(): number;
    toString(): string;
}