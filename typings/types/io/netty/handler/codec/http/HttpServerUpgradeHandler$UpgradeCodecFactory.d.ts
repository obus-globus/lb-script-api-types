import type { HttpServerUpgradeHandler$UpgradeCodec } from '../../../../../io/netty/handler/codec/http/HttpServerUpgradeHandler$UpgradeCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export interface HttpServerUpgradeHandler$UpgradeCodecFactory extends Object{
    newUpgradeCodec(arg0: CharSequence): HttpServerUpgradeHandler$UpgradeCodec;
}