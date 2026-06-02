import type { DefaultHeaders$NameValidator } from '../../../../../io/netty/handler/codec/DefaultHeaders$NameValidator.d.ts'
import type { DefaultHeaders$ValueValidator } from '../../../../../io/netty/handler/codec/DefaultHeaders$ValueValidator.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultHttpHeadersFactory extends Object implements HttpHeadersFactory {
    static headersFactory(): DefaultHttpHeadersFactory;
    static trailersFactory(): DefaultHttpHeadersFactory;
    private constructor(arg0: DefaultHeaders$NameValidator<CharSequence>, arg1: DefaultHeaders$ValueValidator<CharSequence>, arg2: boolean)
    readonly combiningHeaders: boolean;
    readonly nameValidator: DefaultHeaders$NameValidator<CharSequence>;
    readonly valueValidator: DefaultHeaders$ValueValidator<CharSequence>;
    getNameValidator(): DefaultHeaders$NameValidator<CharSequence>;
    getValueValidator(): DefaultHeaders$ValueValidator<CharSequence>;
    isCombiningHeaders(): boolean;
    isValidatingHeaderNames(): boolean;
    isValidatingHeaderValues(): boolean;
    newEmptyHeaders(): Map$Entry<string, string>[];
    newHeaders(): Map$Entry<string, string>[];
    withCombiningHeaders(arg0: boolean): DefaultHttpHeadersFactory;
    withNameValidation(arg0: boolean): DefaultHttpHeadersFactory;
    withNameValidator(arg0: DefaultHeaders$NameValidator<CharSequence>): DefaultHttpHeadersFactory;
    withValidation(arg0: boolean): DefaultHttpHeadersFactory;
    withValueValidation(arg0: boolean): DefaultHttpHeadersFactory;
    withValueValidator(arg0: DefaultHeaders$ValueValidator<CharSequence>): DefaultHttpHeadersFactory;
}