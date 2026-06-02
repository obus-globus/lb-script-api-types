import type { ClaimsMutator } from '../../io/jsonwebtoken/ClaimsMutator.d.ts'
import type { Builder } from '../../io/jsonwebtoken/lang/Builder.d.ts'
import type { MapMutator } from '../../io/jsonwebtoken/lang/MapMutator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ClaimsBuilder extends ClaimsMutator<ClaimsBuilder>, Builder<Claims>, MapMutator<string, Object, ClaimsBuilder>, Object{
}