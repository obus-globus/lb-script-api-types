import type { ResultSetMetaData } from '../../../../../../../../java/sql/ResultSetMetaData.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class JdbcDatabaseManager$ResultSetColumnMetaData extends Object {
    constructor(rsMetaData: ResultSetMetaData, j: number)
    private constructor(schemaName: string, catalogName: string, tableName: string, name: string, label: string, displaySize: number, type: number, typeName: string, className: string, precision: number, scale: number)
    readonly catalogName: string;
    readonly className: string;
    readonly displaySize: number;
    // private isStringType: boolean;
    readonly label: string;
    readonly name: string;
    readonly nameKey: string;
    readonly precision: number;
    readonly scale: number;
    readonly schemaName: string;
    readonly tableName: string;
    readonly type: number;
    readonly typeName: string;
    getCatalogName(): string;
    getClassName(): string;
    getDisplaySize(): number;
    getLabel(): string;
    getName(): string;
    getNameKey(): string;
    getPrecision(): number;
    getScale(): number;
    getSchemaName(): string;
    getTableName(): string;
    getType(): number;
    getTypeName(): string;
    isStringType(): boolean;
    toString(): string;
    truncate(string: string): string;
}