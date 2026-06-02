import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
export interface ConfigurationListener extends Object{
    onChange(reconfigurable: Reconfigurable): void;
}