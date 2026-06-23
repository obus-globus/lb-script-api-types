import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { AbstractSerializer } from '../../../../io/jsonwebtoken/io/AbstractSerializer.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GsonSerializer<T extends unknown> extends AbstractSerializer<T> {
    constructor()
    constructor(arg0: Gson)
    // private gson: Gson;
    doSerialize(arg0: T, arg1: OutputStream): void;
    writeValue(arg0: Object, arg1: Writer): void;
}