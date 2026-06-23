import type { MapMutator } from '../../../io/jsonwebtoken/lang/MapMutator.d.ts'
import type { NestedCollection } from '../../../io/jsonwebtoken/lang/NestedCollection.d.ts'
import type { HashAlgorithm } from '../../../io/jsonwebtoken/security/HashAlgorithm.d.ts'
import type { KeyOperation } from '../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { KeyOperationPolicied } from '../../../io/jsonwebtoken/security/KeyOperationPolicied.d.ts'
import type { SecurityBuilder } from '../../../io/jsonwebtoken/security/SecurityBuilder.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JwkBuilder<K extends Key, J extends { [key: string]: any }, T extends JwkBuilder<K, J, T>> extends MapMutator<string, Object, T>, KeyOperationPolicied<T>, SecurityBuilder<J, T>, Object{
    algorithm(arg0: string): T;
    id(arg0: string): T;
    idFromThumbprint(): T;
    idFromThumbprint(arg0: HashAlgorithm): T;
    operations(): NestedCollection<KeyOperation, T>;
}