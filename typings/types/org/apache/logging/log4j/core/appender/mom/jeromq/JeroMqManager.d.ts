import type { AbstractManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/AbstractManager.d.ts'
import type { JeroMqManager$JeroMqConfiguration } from '../../../../../../../../org/apache/logging/log4j/core/appender/mom/jeromq/JeroMqManager$JeroMqConfiguration.d.ts'
export class JeroMqManager extends AbstractManager {
    static SYS_PROPERTY_ENABLE_SHUTDOWN_HOOK: string;
    static SYS_PROPERTY_IO_THREADS: string;
    private constructor(name: string, config: JeroMqManager$JeroMqConfiguration)
}