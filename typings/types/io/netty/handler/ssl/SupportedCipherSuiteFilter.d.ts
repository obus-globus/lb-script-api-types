import type { CipherSuiteFilter } from '../../../../io/netty/handler/ssl/CipherSuiteFilter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SupportedCipherSuiteFilter extends Object implements CipherSuiteFilter {
    static INSTANCE: SupportedCipherSuiteFilter;
    private constructor()
    filterCipherSuites(arg0: string[], arg1: string[], arg2: string[]): string[];
}