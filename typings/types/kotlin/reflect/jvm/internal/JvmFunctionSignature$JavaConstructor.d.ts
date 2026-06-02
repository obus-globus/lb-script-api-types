import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { JvmFunctionSignature } from '../../../../kotlin/reflect/jvm/internal/JvmFunctionSignature.d.ts'
export class JvmFunctionSignature$JavaConstructor extends JvmFunctionSignature {
    constructor(constructor: Constructor<Object>)
    readonly constructor: Constructor<Object>;
    asString(): string;
}