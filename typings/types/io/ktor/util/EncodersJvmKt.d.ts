import type { Encoder } from '../../../io/ktor/util/Encoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EncodersJvmKt extends Object {
    static getDeflate(): Encoder;
    static getGZip(): Encoder;
}