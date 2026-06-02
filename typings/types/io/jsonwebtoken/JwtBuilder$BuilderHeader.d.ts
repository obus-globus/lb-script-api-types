import type { JweHeaderMutator } from '../../io/jsonwebtoken/JweHeaderMutator.d.ts'
import type { JwtBuilder } from '../../io/jsonwebtoken/JwtBuilder.d.ts'
import type { Conjunctor } from '../../io/jsonwebtoken/lang/Conjunctor.d.ts'
import type { X509Builder } from '../../io/jsonwebtoken/security/X509Builder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JwtBuilder$BuilderHeader extends JweHeaderMutator<JwtBuilder$BuilderHeader>, Conjunctor<JwtBuilder>, X509Builder<JwtBuilder$BuilderHeader>, Object{
}