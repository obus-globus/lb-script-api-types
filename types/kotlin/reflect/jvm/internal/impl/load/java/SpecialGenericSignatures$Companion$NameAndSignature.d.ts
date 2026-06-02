import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class SpecialGenericSignatures$Companion$NameAndSignature extends Object {
    constructor(arg0: string, arg1: Name, arg2: string, arg3: string)
    // private classInternalName: string;
    readonly name: Name;
    // private parameters: string;
    // private returnType: string;
    readonly signature: string;
    copy(arg0: string, arg1: Name, arg2: string, arg3: string): SpecialGenericSignatures$Companion$NameAndSignature;
    equals(arg0: Object | null): boolean;
    getName(): Name;
    getSignature(): string;
    hashCode(): number;
    toString(): string;
}