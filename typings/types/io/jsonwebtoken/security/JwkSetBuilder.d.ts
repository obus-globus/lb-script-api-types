import type { MapMutator } from '../../../io/jsonwebtoken/lang/MapMutator.d.ts'
import type { KeyOperationPolicied } from '../../../io/jsonwebtoken/security/KeyOperationPolicied.d.ts'
import type { SecurityBuilder } from '../../../io/jsonwebtoken/security/SecurityBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JwkSetBuilder extends MapMutator<string, Object, JwkSetBuilder>, KeyOperationPolicied<JwkSetBuilder>, SecurityBuilder<{ [key: string]: any }[], JwkSetBuilder>, Object{
    add(arg0: { [key: string]: any }): JwkSetBuilder;
    add(arg0: { [key: string]: any }[]): JwkSetBuilder;
    keys(arg0: { [key: string]: any }[]): JwkSetBuilder;
}