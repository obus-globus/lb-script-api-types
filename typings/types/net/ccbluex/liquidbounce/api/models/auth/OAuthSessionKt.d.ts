import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { Headers$Builder } from '../../../../../../okhttp3/Headers$Builder.d.ts'
export class OAuthSessionKt extends Object {
    static addAuth(self: Headers$Builder, session: OAuthSession): Headers$Builder;
}