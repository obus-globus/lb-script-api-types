import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceUtil extends Object {
    static REFERENCE_CODEC: Codec<URI>;
    static createLocalReference(paramtypeId: string): URI;
    constructor()
}