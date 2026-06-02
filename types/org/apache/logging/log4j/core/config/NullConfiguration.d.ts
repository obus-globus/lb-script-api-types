import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AbstractConfiguration } from '../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
export class NullConfiguration extends AbstractConfiguration {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static NULL_NAME: string;
    static getDefaultLevel(): Level;
    constructor()
}