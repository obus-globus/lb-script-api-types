import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StructuredDataId } from '../../../../../../org/apache/logging/log4j/message/StructuredDataId.d.ts'
export class LoggerFields extends Object {
    static createLoggerFields(paramkeyValuePairs: (Object | null)[], paramsdId: string, paramenterpriseId: string, paramdiscardIfAllFieldsAreEmpty: boolean): LoggerFields;
    private constructor(map: { [key: string]: string }, sdId: string, enterpriseId: string, discardIfAllFieldsAreEmpty: boolean)
    readonly discardIfAllFieldsAreEmpty: boolean;
    // private enterpriseId: string;
    readonly map: { [key: string]: string };
    readonly sdId: string;
    getDiscardIfAllFieldsAreEmpty(): boolean;
    getMap(): { [key: string]: string };
    getSdId(): StructuredDataId;
    toString(): string;
}