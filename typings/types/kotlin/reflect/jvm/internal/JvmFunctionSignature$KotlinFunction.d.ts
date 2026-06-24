import type { JvmFunctionSignature } from '../../../../kotlin/reflect/jvm/internal/JvmFunctionSignature.d.ts'
import type { JvmMemberSignature$Method } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMemberSignature$Method.d.ts'
export class JvmFunctionSignature$KotlinFunction extends JvmFunctionSignature {
    constructor(signature: JvmMemberSignature$Method)
    // private _signature: string;
    readonly methodDesc: string;
    readonly methodName: string;
    // private signature: JvmMemberSignature$Method;
    asString(): string;
}