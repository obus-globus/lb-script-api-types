import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
export class AbstractWatcher$ReconfigurationRunnable extends Object implements Runnable {
    constructor(configurationListener: ConfigurationListener, reconfigurable: Reconfigurable)
    // private configurationListener: ConfigurationListener;
    // private reconfigurable: Reconfigurable;
    run(): void;
}