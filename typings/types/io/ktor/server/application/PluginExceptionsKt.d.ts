import type { InvalidBodyException } from '../../../../io/ktor/server/application/InvalidBodyException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluginExceptionsKt extends Object {
    static noBinaryDataException(expectedTypeName: string, subject: Object | null): InvalidBodyException;
}