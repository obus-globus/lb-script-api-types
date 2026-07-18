import type { DefaultHeaders$HeaderEntry } from '../../../../../io/netty/handler/codec/DefaultHeaders$HeaderEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class DefaultHttp2Headers$Http2HeaderEntry extends DefaultHeaders$HeaderEntry<CharSequence, CharSequence> {
    constructor(null_: (Object | null)[], arg1: number, arg2: CharSequence, arg3: CharSequence, arg4: DefaultHeaders$HeaderEntry<CharSequence, CharSequence>)
    remove(): void;
}