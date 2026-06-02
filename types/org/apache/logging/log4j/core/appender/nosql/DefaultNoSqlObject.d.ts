import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NoSqlObject } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlObject.d.ts'
export class DefaultNoSqlObject extends Object implements NoSqlObject<{ [key: string]: Object }> {
    constructor()
    // private map: { [key: string]: Object };
    set(field: string, value: Object): void;
    set(field: string, values: Object[]): void;
    set(field: string, values: NoSqlObject<{ [key: string]: Object }>[]): void;
    set(field: string, value: NoSqlObject<{ [key: string]: Object }>): void;
    unwrap(): { [key: string]: Object };
}