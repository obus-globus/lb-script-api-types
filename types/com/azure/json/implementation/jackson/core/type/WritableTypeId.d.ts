import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { WritableTypeId$Inclusion } from '../../../../../../../com/azure/json/implementation/jackson/core/type/WritableTypeId$Inclusion.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WritableTypeId extends Object {
    constructor(arg0: Object, arg1: JsonToken, arg2: Object)
    extra: Object;
    forValue: Object;
    id: Object;
    include: WritableTypeId$Inclusion;
    valueShape: JsonToken;
}