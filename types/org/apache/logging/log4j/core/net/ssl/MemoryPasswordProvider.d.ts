import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PasswordProvider } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/PasswordProvider.d.ts'
export class MemoryPasswordProvider extends Object implements PasswordProvider {
    constructor(chars: string[])
    readonly password: string[];
    clearSecrets(): void;
    getPassword(): string[];
}