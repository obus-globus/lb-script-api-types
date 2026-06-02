import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { StoreConfigurationException } from '../../../../../../../org/apache/logging/log4j/core/net/ssl/StoreConfigurationException.d.ts'
export class TrustStoreConfigurationException extends StoreConfigurationException {
    constructor(e: Exception)
}