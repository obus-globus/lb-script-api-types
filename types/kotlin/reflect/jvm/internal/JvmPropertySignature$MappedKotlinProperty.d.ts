import type { JvmFunctionSignature$KotlinFunction } from '../../../../kotlin/reflect/jvm/internal/JvmFunctionSignature$KotlinFunction.d.ts'
import type { JvmPropertySignature } from '../../../../kotlin/reflect/jvm/internal/JvmPropertySignature.d.ts'
export class JvmPropertySignature$MappedKotlinProperty extends JvmPropertySignature {
    constructor(getterSignature: JvmFunctionSignature$KotlinFunction, setterSignature: JvmFunctionSignature$KotlinFunction | null)
    readonly getterSignature: JvmFunctionSignature$KotlinFunction;
    readonly setterSignature: JvmFunctionSignature$KotlinFunction | null;
    asString(): string;
}