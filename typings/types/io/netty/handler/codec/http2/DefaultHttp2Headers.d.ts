import type { DefaultHeaders$NameValidator } from '../../../../../io/netty/handler/codec/DefaultHeaders$NameValidator.d.ts'
import type { DefaultHeaders$ValueValidator } from '../../../../../io/netty/handler/codec/DefaultHeaders$ValueValidator.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class DefaultHttp2Headers {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static defaultHtt2NameValidator(): DefaultHeaders$NameValidator<CharSequence>;
    static defaultHttp2ValueValidator(): DefaultHeaders$ValueValidator<CharSequence>;
}