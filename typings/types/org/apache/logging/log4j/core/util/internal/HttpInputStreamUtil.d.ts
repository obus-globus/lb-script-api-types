import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AuthorizationProvider } from '../../../../../../../org/apache/logging/log4j/core/util/AuthorizationProvider.d.ts'
import type { HttpInputStreamUtil$Result } from '../../../../../../../org/apache/logging/log4j/core/util/internal/HttpInputStreamUtil$Result.d.ts'
import type { LastModifiedSource } from '../../../../../../../org/apache/logging/log4j/core/util/internal/LastModifiedSource.d.ts'
export class HttpInputStreamUtil extends Object {
    static getInputStream(paramsource: LastModifiedSource, paramauthorizationProvider: AuthorizationProvider): HttpInputStreamUtil$Result;
    static readStream(paramis: InputStream): number[];
    constructor()
}