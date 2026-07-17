import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ParameterMap$ParameterMapIterator } from '../../../io/jsonwebtoken/impl/ParameterMap$ParameterMapIterator.d.ts'
export class ParameterMap$KeyIterator extends ParameterMap$ParameterMapIterator<string> {
    private constructor(null_: JavaMap<any, any>)
    next(): string;
}