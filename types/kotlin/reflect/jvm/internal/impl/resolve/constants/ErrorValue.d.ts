import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { ErrorValue$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ErrorValue$Companion.d.ts'
export abstract class ErrorValue extends ConstantValue<void> {
    static Companion: ErrorValue$Companion;
    constructor()
    getValue(): void;
}