import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
export class DatagramSocketManager$FactoryData extends Object {
    constructor(host: string, port: number, layout: Layout<Serializable>, bufferSize: number)
    // private bufferSize: number;
    // private host: string;
    // private layout: Layout<Serializable>;
    // private port: number;
}