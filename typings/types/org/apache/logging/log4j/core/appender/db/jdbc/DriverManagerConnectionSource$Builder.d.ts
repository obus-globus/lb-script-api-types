import type { AbstractDriverManagerConnectionSource$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/AbstractDriverManagerConnectionSource$Builder.d.ts'
import type { DriverManagerConnectionSource } from '../../../../../../../../org/apache/logging/log4j/core/appender/db/jdbc/DriverManagerConnectionSource.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class DriverManagerConnectionSource$Builder<B extends DriverManagerConnectionSource$Builder<B>> extends AbstractDriverManagerConnectionSource$Builder<B> implements Builder<DriverManagerConnectionSource> {
    constructor()
    build(): DriverManagerConnectionSource;
    getErrorPrefix(): string;
    isValid(): boolean;
}