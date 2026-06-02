import type { ClaimsMutator$AudienceCollection } from '../../io/jsonwebtoken/ClaimsMutator$AudienceCollection.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ClaimsMutator<T extends ClaimsMutator<T>> extends Object{
    audience(): ClaimsMutator$AudienceCollection<T>;
    expiration(arg0: Date): T;
    id(arg0: string): T;
    issuedAt(arg0: Date): T;
    issuer(arg0: string): T;
    notBefore(arg0: Date): T;
    setAudience(arg0: string): T;
    setExpiration(arg0: Date): T;
    setId(arg0: string): T;
    setIssuedAt(arg0: Date): T;
    setIssuer(arg0: string): T;
    setNotBefore(arg0: Date): T;
    setSubject(arg0: string): T;
    subject(arg0: string): T;
}