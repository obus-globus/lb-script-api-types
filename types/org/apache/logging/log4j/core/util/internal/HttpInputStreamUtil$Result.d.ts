import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Status } from '../../../../../../../org/apache/logging/log4j/core/util/internal/Status.d.ts'
export class HttpInputStreamUtil$Result extends Object {
    constructor()
    constructor(status: Status)
    // private bytes: number[];
    readonly status: Status;
    getInputStream(): InputStream;
    getStatus(): Status;
}