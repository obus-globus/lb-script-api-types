import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringLayout } from '../../../../../../../org/apache/logging/log4j/core/StringLayout.d.ts'
import type { ColumnMapping } from '../../../../../../../org/apache/logging/log4j/core/appender/db/ColumnMapping.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class ColumnMapping$Builder extends Object implements Builder<ColumnMapping> {
    constructor()
    // private columnType: Class<Object>;
    // private configuration: Configuration;
    // private layout: StringLayout;
    // private literal: string;
    // private name: string;
    // private parameter: string;
    // private pattern: string;
    // private source: string;
    // private type: Class<Object>;
    build(): ColumnMapping;
    getErrorPrefix(): string;
    isValid(): boolean;
    setColumnType(columnType: Class<Object>): ColumnMapping$Builder;
    setConfiguration(configuration: Configuration): ColumnMapping$Builder;
    setLayout(layout: StringLayout): ColumnMapping$Builder;
    setLiteral(literal: string): ColumnMapping$Builder;
    setName(name: string): ColumnMapping$Builder;
    setParameter(parameter: string): ColumnMapping$Builder;
    setPattern(pattern: string): ColumnMapping$Builder;
    setSource(source: string): ColumnMapping$Builder;
    setType(type: Class<Object>): ColumnMapping$Builder;
    toString(): string;
}