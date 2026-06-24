import type { ParameterMap$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ParameterMap$ParameterMapIterator } from '../../../io/jsonwebtoken/impl/ParameterMap$ParameterMapIterator.d.ts'
export class ParameterMap$KeyIterator extends ParameterMap$ParameterMapIterator<string> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: ParameterMap$1)
    next(): string;
}