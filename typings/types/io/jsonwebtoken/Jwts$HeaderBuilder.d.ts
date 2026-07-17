import type { JavaMap } from '../../JavaMap.d.ts'
import type { JweHeaderMutator } from '../../io/jsonwebtoken/JweHeaderMutator.d.ts'
import type { Builder } from '../../io/jsonwebtoken/lang/Builder.d.ts'
import type { X509Builder } from '../../io/jsonwebtoken/security/X509Builder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jwts$HeaderBuilder extends JweHeaderMutator<Jwts$HeaderBuilder>, Builder<JavaMap<any, any>>, X509Builder<Jwts$HeaderBuilder>, Object{
}