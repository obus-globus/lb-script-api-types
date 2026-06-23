import type { Path } from '../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PasswordProvider } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/PasswordProvider.d.ts'
export class FilePasswordProvider extends Object implements PasswordProvider {
    constructor(passwordFile: string)
    // private passwordPath: Path[];
    getPassword(): string[];
}