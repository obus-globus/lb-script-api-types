import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransformBodyContext extends Object {
    constructor(requestedType: TypeInfo | null)
    readonly requestedType: TypeInfo | null;
}