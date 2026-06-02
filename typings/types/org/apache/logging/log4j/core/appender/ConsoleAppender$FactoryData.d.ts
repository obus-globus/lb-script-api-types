import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
export class ConsoleAppender$FactoryData extends Object {
    constructor(os: OutputStream, type: string, layout: Layout<Serializable>)
    // private layout: Layout<Serializable>;
    // private name: string;
    // private os: OutputStream;
}