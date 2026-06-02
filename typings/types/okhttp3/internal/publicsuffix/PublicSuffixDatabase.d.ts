import type { Object } from '../../../java/lang/Object.d.ts'
import type { PublicSuffixDatabase$Companion } from '../../../okhttp3/internal/publicsuffix/PublicSuffixDatabase$Companion.d.ts'
import type { PublicSuffixList } from '../../../okhttp3/internal/publicsuffix/PublicSuffixList.d.ts'
export class PublicSuffixDatabase extends Object {
    static Companion: PublicSuffixDatabase$Companion;
    constructor(publicSuffixList: PublicSuffixList)
    // private publicSuffixList: PublicSuffixList;
    // private findMatchingRule(domainLabels: string[]): string[];
    getEffectiveTldPlusOne(domain: string): string | null;
    // private splitDomain(domain: string): string[];
}