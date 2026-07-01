import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { AbstractDeserializer } from '../../../../io/jsonwebtoken/io/AbstractDeserializer.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GsonDeserializer<T extends unknown> extends AbstractDeserializer<T> {
    constructor()
    constructor(arg0: Gson)
    // private gson: Gson;
    // private returnType: Class<T>;
    doDeserialize(arg0: Reader): T;
}