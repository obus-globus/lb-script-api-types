import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { JavaTypeQualifiers } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/JavaTypeQualifiers.d.ts'
import type { PredefinedFunctionEnhancementInfo } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/PredefinedFunctionEnhancementInfo.d.ts'
import type { SignatureEnhancementBuilder$ClassEnhancementBuilder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/SignatureEnhancementBuilder$ClassEnhancementBuilder.d.ts'
import type { TypeEnhancementInfo } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/TypeEnhancementInfo.d.ts'
import type { ReturnValueStatus } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ReturnValueStatus.d.ts'
import type { JvmPrimitiveType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/jvm/JvmPrimitiveType.d.ts'
export class SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder extends Object {
    constructor(null_: SignatureEnhancementBuilder$ClassEnhancementBuilder, arg1: string, arg2: string)
    // private errorsSinceLanguageVersion: string;
    // private functionName: string;
    // private parameters: Pair<string, TypeEnhancementInfo>[];
    // private returnType: Pair<string, TypeEnhancementInfo>;
    // private returnValueStatus: ReturnValueStatus;
    build(): Pair<string, PredefinedFunctionEnhancementInfo>;
    mustUseReturnValue(): void;
    parameter(arg0: string, ...arg1: JavaTypeQualifiers[]): void;
    returns(arg0: string, ...arg1: JavaTypeQualifiers[]): void;
    returns(arg0: JvmPrimitiveType): void;
}