import type { SSLException } from '../../../javax/net/ssl/SSLException.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class EchRejectedException extends SSLException {
    constructor(publicName: string, nextEchConfigList: ByteString | null)
    readonly nextEchConfigList: ByteString | null;
    readonly publicName: string;
}