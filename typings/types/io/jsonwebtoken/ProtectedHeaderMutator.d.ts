import type { HeaderMutator } from '../../io/jsonwebtoken/HeaderMutator.d.ts'
import type { NestedCollection } from '../../io/jsonwebtoken/lang/NestedCollection.d.ts'
import type { X509Mutator } from '../../io/jsonwebtoken/security/X509Mutator.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ProtectedHeaderMutator<T extends ProtectedHeaderMutator<T>> extends HeaderMutator<T>, X509Mutator<T>, Object{
    critical(): NestedCollection<string, T>;
    jwk(arg0: { [key: string]: any }): T;
    jwkSetUrl(arg0: URI): T;
    keyId(arg0: string): T;
    setAlgorithm(arg0: string): T;
    setKeyId(arg0: string): T;
}