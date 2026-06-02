import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { JvmFunctionSignature } from '../../../../kotlin/reflect/jvm/internal/JvmFunctionSignature.d.ts'
export class JvmFunctionSignature$FakeJavaAnnotationConstructor extends JvmFunctionSignature {
    constructor(jClass: Class<Object>)
    // private jClass: Class<Object>;
    readonly methods: Method[];
    asString(): string;
}