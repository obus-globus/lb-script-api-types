import type { X509Accessor } from '../../../io/jsonwebtoken/security/X509Accessor.d.ts'
import type { X509Mutator } from '../../../io/jsonwebtoken/security/X509Mutator.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface X509Context<T extends X509Mutator<T>> extends X509Accessor, X509Mutator<T>, Object{
    getX509Url(): URI;
}