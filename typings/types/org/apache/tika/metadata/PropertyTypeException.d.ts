import type { IllegalArgumentException } from '../../../../java/lang/IllegalArgumentException.d.ts'
import type { Property$PropertyType } from '../../../../org/apache/tika/metadata/Property$PropertyType.d.ts'
import type { Property$ValueType } from '../../../../org/apache/tika/metadata/Property$ValueType.d.ts'
export class PropertyTypeException extends IllegalArgumentException {
    constructor(arg0: string)
    constructor(arg0: Property$PropertyType)
    constructor(arg0: Property$PropertyType, arg1: Property$PropertyType)
    constructor(arg0: Property$ValueType, arg1: Property$ValueType)
}