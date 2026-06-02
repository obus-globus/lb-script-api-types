import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PasswordProvider } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/PasswordProvider.d.ts'
export class EnvironmentPasswordProvider extends Object implements PasswordProvider {
    constructor(passwordEnvironmentVariable: string)
    // private passwordEnvironmentVariable: string;
    getPassword(): string[];
}