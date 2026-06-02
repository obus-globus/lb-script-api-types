import type { Wrapper } from '../../java/sql/Wrapper.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ResultSetMetaData extends Wrapper, Object{
    getCatalogName(arg0: number): string;
    getColumnClassName(arg0: number): string;
    getColumnCount(): number;
    getColumnDisplaySize(arg0: number): number;
    getColumnLabel(arg0: number): string;
    getColumnName(arg0: number): string;
    getColumnType(arg0: number): number;
    getColumnTypeName(arg0: number): string;
    getPrecision(arg0: number): number;
    getScale(arg0: number): number;
    getSchemaName(arg0: number): string;
    getTableName(arg0: number): string;
    isAutoIncrement(arg0: number): boolean;
    isCaseSensitive(arg0: number): boolean;
    isCurrency(arg0: number): boolean;
    isDefinitelyWritable(arg0: number): boolean;
    isNullable(arg0: number): number;
    isReadOnly(arg0: number): boolean;
    isSearchable(arg0: number): boolean;
    isSigned(arg0: number): boolean;
    isWritable(arg0: number): boolean;
}