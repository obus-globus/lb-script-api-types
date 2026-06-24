import type { ParameterMap$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ParameterMap$ParameterMapIterator } from '../../../io/jsonwebtoken/impl/ParameterMap$ParameterMapIterator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class ParameterMap$EntryIterator extends ParameterMap$ParameterMapIterator<Map$Entry<string, Object>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: ParameterMap$1)
    next(): Map$Entry<string, Object>;
}