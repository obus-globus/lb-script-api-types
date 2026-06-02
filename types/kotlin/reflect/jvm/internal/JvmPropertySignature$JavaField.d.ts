import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { JvmPropertySignature } from '../../../../kotlin/reflect/jvm/internal/JvmPropertySignature.d.ts'
export class JvmPropertySignature$JavaField extends JvmPropertySignature {
    constructor(field: Field)
    readonly field: Field;
    asString(): string;
}