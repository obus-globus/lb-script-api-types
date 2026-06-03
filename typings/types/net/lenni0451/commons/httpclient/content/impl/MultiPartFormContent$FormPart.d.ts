import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { HeaderStore } from '../../../../../../net/lenni0451/commons/httpclient/HeaderStore.d.ts'
import type { HttpContent } from '../../../../../../net/lenni0451/commons/httpclient/content/HttpContent.d.ts'
export class MultiPartFormContent$FormPart extends HeaderStore<MultiPartFormContent$FormPart> {
    constructor(arg0: string, arg1: HttpContent)
    constructor(arg0: string, arg1: HttpContent, arg2: string)
    readonly content: HttpContent;
    forEachHeader(arg0: (param0: string, param1: string) => void): MultiPartFormContent$FormPart;
    // private forEachHeader(arg0: (param0: string) => void): void;
    getContent(): HttpContent;
}