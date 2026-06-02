import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ColumnConfig } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/ColumnConfig.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class ColumnConfig$Builder extends Object implements Builder<ColumnConfig> {
    constructor()
    // private configuration: Configuration;
    // private isClob: boolean;
    // private isEventTimestamp: boolean;
    // private isUnicode: boolean;
    // private literal: string;
    // private name: string;
    // private pattern: string;
    build(): ColumnConfig;
    getErrorPrefix(): string;
    isValid(): boolean;
    setClob(clob: boolean): ColumnConfig$Builder;
    setConfiguration(configuration: Configuration): ColumnConfig$Builder;
    setEventTimestamp(eventTimestamp: boolean): ColumnConfig$Builder;
    setLiteral(literal: string): ColumnConfig$Builder;
    setName(name: string): ColumnConfig$Builder;
    setPattern(pattern: string): ColumnConfig$Builder;
    setUnicode(unicode: boolean): ColumnConfig$Builder;
}