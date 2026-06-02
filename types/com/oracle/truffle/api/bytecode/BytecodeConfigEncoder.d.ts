import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BytecodeConfigEncoder extends Object {
    constructor(token: Object)
    encodeInstrumentation(instrumentations: Class<Object>): number;
    encodeTag(tag: Class<Object>): number;
}