import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { StringValuesBuilder } from '../../../io/ktor/util/StringValuesBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StringValues$Companion extends Object {
    // private Empty: StringValues;
    /*not mapped: */ getEmpty(): StringValues;
    build(caseInsensitiveName: boolean, builder: (param0: StringValuesBuilder) => void): StringValues;
}