import type { ITokenCacheAccessContext } from '../../../../com/microsoft/aad/msal4j/ITokenCacheAccessContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITokenCacheAccessAspect extends Object{
    afterCacheAccess(arg0: ITokenCacheAccessContext): void;
    beforeCacheAccess(arg0: ITokenCacheAccessContext): void;
}