import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { PublicSuffixType } from '../../../../com/google/thirdparty/publicsuffix/PublicSuffixType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternetDomainName extends Object {
    static from(paramdomain: string): InternetDomainName;
    static isValid(paramname: string): boolean;
    constructor(name: string)
    private constructor(name: string, parts: string[])
    // private name: string;
    // private parts: string[];
    // private publicSuffixIndexCache: number;
    // private registrySuffixIndexCache: number;
    // private ancestor(levels: number): InternetDomainName;
    child(leftParts: string): InternetDomainName;
    equals(object: Object | null): boolean;
    // private findSuffixOfType(desiredType: Optional<PublicSuffixType>): number;
    hasParent(): boolean;
    hasPublicSuffix(): boolean;
    hasRegistrySuffix(): boolean;
    hashCode(): number;
    isPublicSuffix(): boolean;
    isRegistrySuffix(): boolean;
    isTopDomainUnderRegistrySuffix(): boolean;
    isTopPrivateDomain(): boolean;
    isUnderPublicSuffix(): boolean;
    isUnderRegistrySuffix(): boolean;
    parent(): InternetDomainName;
    parts(): string[];
    publicSuffix(): InternetDomainName;
    // private publicSuffixIndex(): number;
    registrySuffix(): InternetDomainName;
    // private registrySuffixIndex(): number;
    toString(): string;
    topDomainUnderRegistrySuffix(): InternetDomainName;
    topPrivateDomain(): InternetDomainName;
}