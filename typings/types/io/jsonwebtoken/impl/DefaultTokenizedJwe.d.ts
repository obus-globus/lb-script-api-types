import type { JavaMap } from '../../../JavaMap.d.ts'
import type { DefaultTokenizedJwt } from '../../../io/jsonwebtoken/impl/DefaultTokenizedJwt.d.ts'
import type { TokenizedJwe } from '../../../io/jsonwebtoken/impl/TokenizedJwe.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class DefaultTokenizedJwe extends DefaultTokenizedJwt implements TokenizedJwe {
    constructor(arg0: CharSequence, arg1: CharSequence, arg2: CharSequence, arg3: CharSequence, arg4: CharSequence)
    readonly encryptedKey: CharSequence;
    readonly iv: CharSequence;
    createHeader(arg0: JavaMap<string, Object | null>): JavaMap<any, any>;
    getEncryptedKey(): CharSequence;
    getIv(): CharSequence;
}