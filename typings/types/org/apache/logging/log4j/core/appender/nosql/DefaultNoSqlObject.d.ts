import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NoSqlObject } from '../../../../../../../org/apache/logging/log4j/core/appender/nosql/NoSqlObject.d.ts'
export class DefaultNoSqlObject extends Object implements NoSqlObject<JavaMap<string, Object>> {
    constructor()
    // private map: JavaMap<string, Object>;
    set(field: string, value: Object): void;
    set(field: string, values: Object[]): void;
    set(field: string, values: NoSqlObject<JavaMap<string, Object>>[]): void;
    set(field: string, value: NoSqlObject<JavaMap<string, Object>>): void;
    unwrap(): JavaMap<string, Object>;
}