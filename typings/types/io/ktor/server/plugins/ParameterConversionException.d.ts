import type { BadRequestException } from '../../../../io/ktor/server/plugins/BadRequestException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class ParameterConversionException extends BadRequestException implements CopyableThrowable<ParameterConversionException> {
    constructor(parameterName: string, type: string, cause: Throwable | null)
    readonly parameterName: string;
    readonly type: string;
    createCopy(): ParameterConversionException;
}