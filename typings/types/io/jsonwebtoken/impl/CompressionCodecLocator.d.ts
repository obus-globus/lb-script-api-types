import type { CompressionCodecResolver } from '../../../io/jsonwebtoken/CompressionCodecResolver.d.ts'
import type { Locator } from '../../../io/jsonwebtoken/Locator.d.ts'
import type { Function } from '../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { CompressionAlgorithm } from '../../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompressionCodecLocator extends Object implements Locator<CompressionAlgorithm>, Function<Header, CompressionAlgorithm> {
    constructor(arg0: CompressionCodecResolver)
    // private resolver: CompressionCodecResolver;
    apply(arg0: Header): CompressionAlgorithm;
    locate(arg0: Header): CompressionAlgorithm;
}