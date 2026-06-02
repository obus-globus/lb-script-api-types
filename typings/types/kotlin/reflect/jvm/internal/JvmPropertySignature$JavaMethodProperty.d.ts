import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { JvmPropertySignature } from '../../../../kotlin/reflect/jvm/internal/JvmPropertySignature.d.ts'
export class JvmPropertySignature$JavaMethodProperty extends JvmPropertySignature {
    constructor(getterMethod: Method, setterMethod: Method | null)
    readonly getterMethod: Method;
    readonly setterMethod: Method | null;
    asString(): string;
}