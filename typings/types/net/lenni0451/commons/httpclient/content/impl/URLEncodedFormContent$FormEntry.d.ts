import type { URLEncodedFormContent$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class URLEncodedFormContent$FormEntry extends Object {
    private constructor(arg0: string, arg1: string, arg2: Charset)
    constructor(arg0: string, arg1: string, arg2: Charset, arg3: URLEncodedFormContent$1)
    readonly key: number[];
    readonly value: number[];
    getKey(): number[];
    getLength(): number;
    getValue(): number[];
}