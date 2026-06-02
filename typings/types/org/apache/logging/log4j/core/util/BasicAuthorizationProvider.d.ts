import type { URLConnection } from '../../../../../../java/net/URLConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AuthorizationProvider } from '../../../../../../org/apache/logging/log4j/core/util/AuthorizationProvider.d.ts'
import type { PropertiesUtil } from '../../../../../../org/apache/logging/log4j/util/PropertiesUtil.d.ts'
export class BasicAuthorizationProvider extends Object implements AuthorizationProvider {
    static CONFIG_PASSWORD: string;
    static CONFIG_USER_NAME: string;
    static PASSWORD_DECRYPTOR: string;
    constructor(props: PropertiesUtil)
    // private authString: string;
    addAuthorization(urlConnection: URLConnection): void;
}