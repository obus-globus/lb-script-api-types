import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
import type { StructuredDataId } from '../../../../../../org/apache/logging/log4j/message/StructuredDataId.d.ts'
export class LoggerFields extends Object {
    static createLoggerFields(paramkeyValuePairs: KeyValuePair[], paramsdId: string, paramenterpriseId: string, paramdiscardIfAllFieldsAreEmpty: boolean): LoggerFields;
    private constructor(map: JavaMap<string, string>, sdId: string, enterpriseId: string, discardIfAllFieldsAreEmpty: boolean)
    readonly discardIfAllFieldsAreEmpty: boolean;
    // private enterpriseId: string;
    readonly map: JavaMap<string, string>;
    readonly sdId: string;
    getDiscardIfAllFieldsAreEmpty(): boolean;
    getMap(): JavaMap<string, string>;
    getSdId(): StructuredDataId;
    toString(): string;
}