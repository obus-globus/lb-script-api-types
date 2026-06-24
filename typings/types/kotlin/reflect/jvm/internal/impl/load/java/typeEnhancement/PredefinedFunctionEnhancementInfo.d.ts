import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { TypeEnhancementInfo } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/TypeEnhancementInfo.d.ts'
import type { ReturnValueStatus } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ReturnValueStatus.d.ts'
export class PredefinedFunctionEnhancementInfo extends Object {
    constructor()
    constructor(arg0: TypeEnhancementInfo, arg1: TypeEnhancementInfo[], arg2: string, arg3: ReturnValueStatus)
    constructor(arg0: TypeEnhancementInfo, arg1: (Object | null)[], arg2: string, arg3: ReturnValueStatus, arg4: number, arg5: DefaultConstructorMarker)
    readonly errorsSinceLanguageVersion: string;
    readonly parametersInfo: TypeEnhancementInfo[];
    readonly returnTypeInfo: TypeEnhancementInfo;
    // private returnValueStatus: ReturnValueStatus;
    readonly warningModeClone: PredefinedFunctionEnhancementInfo;
    getErrorsSinceLanguageVersion(): string;
    getParametersInfo(): TypeEnhancementInfo[];
    getReturnTypeInfo(): TypeEnhancementInfo;
    getWarningModeClone(): PredefinedFunctionEnhancementInfo;
}