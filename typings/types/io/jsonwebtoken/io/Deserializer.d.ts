import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Deserializer<T extends unknown> extends Object{
    deserialize(arg0: Reader): T;
    deserialize(arg0: number[]): T;
}