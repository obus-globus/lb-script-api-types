import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ColumnConfig$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ColumnConfig$Builder.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { PatternLayout } from '../../../../../../../../org/apache/logging/log4j/core/layout/PatternLayout.d.ts'
export class ColumnConfig extends Object {
    static createColumnConfig(paramconfig: Configuration, paramname: string, parampattern: string, paramliteralValue: string, parameventTimestamp: string, paramunicode: string, paramclob: string): ColumnConfig;
    static newBuilder(): ColumnConfig$Builder;
    constructor(arg0: string, arg1: PatternLayout, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: any)
    readonly clob: boolean;
    readonly columnName: string;
    readonly columnNameKey: string;
    readonly eventTimestamp: boolean;
    readonly layout: PatternLayout;
    readonly literalValue: string;
    readonly unicode: boolean;
    getColumnName(): string;
    getColumnNameKey(): string;
    getLayout(): PatternLayout;
    getLiteralValue(): string;
    isClob(): boolean;
    isEventTimestamp(): boolean;
    isUnicode(): boolean;
    toString(): string;
}