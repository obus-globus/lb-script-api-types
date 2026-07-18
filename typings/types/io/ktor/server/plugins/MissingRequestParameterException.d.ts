import type { BadRequestException } from '../../../../io/ktor/server/plugins/BadRequestException.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class MissingRequestParameterException extends BadRequestException implements CopyableThrowable<MissingRequestParameterException> {
    constructor(parameterName: string, parameterType: string | null)
    readonly parameterName: string;
    readonly parameterType: string | null;
    createCopy(): MissingRequestParameterException;
}