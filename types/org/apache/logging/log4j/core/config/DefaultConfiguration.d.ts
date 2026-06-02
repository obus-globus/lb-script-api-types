import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AbstractConfiguration } from '../../../../../../org/apache/logging/log4j/core/config/AbstractConfiguration.d.ts'
export class DefaultConfiguration extends AbstractConfiguration {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_LEVEL: string;
    static DEFAULT_NAME: string;
    static DEFAULT_PATTERN: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getDefaultLevel(): Level;
    constructor()
    doConfigure(): void;
}