import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaTypeQualifiers$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeQualifiers$Companion.d.ts'
import type { MutabilityQualifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/MutabilityQualifier.d.ts'
import type { NullabilityQualifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/NullabilityQualifier.d.ts'
export class JavaTypeQualifiers extends Object {
    static Companion: JavaTypeQualifiers$Companion;
    constructor(arg0: NullabilityQualifier, arg1: MutabilityQualifier, arg2: boolean, arg3: boolean, arg4: boolean)
    readonly definitelyNotNull: boolean;
    // private isMutabilityQualifierForWarning: boolean;
    // private isNullabilityQualifierForWarning: boolean;
    readonly mutability: MutabilityQualifier;
    readonly nullability: NullabilityQualifier;
    copy(arg0: NullabilityQualifier, arg1: MutabilityQualifier, arg2: boolean, arg3: boolean, arg4: boolean): JavaTypeQualifiers;
    equals(arg0: Object | null): boolean;
    getDefinitelyNotNull(): boolean;
    getMutability(): MutabilityQualifier;
    getNullability(): NullabilityQualifier;
    hashCode(): number;
    isMutabilityQualifierForWarning(): boolean;
    isNullabilityQualifierForWarning(): boolean;
    toString(): string;
}