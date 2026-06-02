import type { ClaimsMutator } from '../../io/jsonwebtoken/ClaimsMutator.d.ts'
import type { JwtBuilder } from '../../io/jsonwebtoken/JwtBuilder.d.ts'
import type { Conjunctor } from '../../io/jsonwebtoken/lang/Conjunctor.d.ts'
import type { MapMutator } from '../../io/jsonwebtoken/lang/MapMutator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JwtBuilder$BuilderClaims extends ClaimsMutator<JwtBuilder$BuilderClaims>, Conjunctor<JwtBuilder>, MapMutator<string, Object, JwtBuilder$BuilderClaims>, Object{
}