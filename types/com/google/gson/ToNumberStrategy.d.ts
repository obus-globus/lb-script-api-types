import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export interface ToNumberStrategy extends Object{
    readNumber(arg0: JsonReader): Number;
}