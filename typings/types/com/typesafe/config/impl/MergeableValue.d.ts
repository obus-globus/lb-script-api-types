import type { ConfigMergeable } from '../../../../com/typesafe/config/ConfigMergeable.d.ts'
import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MergeableValue extends ConfigMergeable, Object{
    toFallbackValue(): ConfigValue;
    withFallback(arg0: ConfigMergeable): ConfigMergeable;
}