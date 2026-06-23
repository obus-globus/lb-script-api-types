import type { Deserializer } from '../../../io/jsonwebtoken/io/Deserializer.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractDeserializer<T extends unknown> extends Object implements Deserializer<T> {
    constructor()
    deserialize(arg0: Reader): T;
    deserialize(arg0: number[]): T;
    doDeserialize(arg0: Reader): T;
}