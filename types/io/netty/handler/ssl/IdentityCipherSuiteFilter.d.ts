import type { CipherSuiteFilter } from '../../../../io/netty/handler/ssl/CipherSuiteFilter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdentityCipherSuiteFilter extends Object implements CipherSuiteFilter {
    static INSTANCE: IdentityCipherSuiteFilter;
    static INSTANCE_DEFAULTING_TO_SUPPORTED_CIPHERS: IdentityCipherSuiteFilter;
    private constructor(arg0: boolean)
    // private defaultToDefaultCiphers: boolean;
    filterCipherSuites(arg0: string[], arg1: string[], arg2: string[]): string[];
}