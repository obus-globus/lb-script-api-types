import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class UriStringConverter extends Object implements Converter<URI, CharSequence> {
    constructor()
    applyFrom(arg0: CharSequence): URI;
    applyTo(arg0: URI): string;
}