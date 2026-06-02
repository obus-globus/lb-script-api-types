import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { JvmFunctionSignature } from '../../../../kotlin/reflect/jvm/internal/JvmFunctionSignature.d.ts'
export class JvmFunctionSignature$JavaMethod extends JvmFunctionSignature {
    constructor(method: Method)
    readonly method: Method;
    asString(): string;
}