import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { ConfigMergeable } from '../../../../com/typesafe/config/ConfigMergeable.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigRenderOptions } from '../../../../com/typesafe/config/ConfigRenderOptions.d.ts'
import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Container } from '../../../../com/typesafe/config/impl/Container.d.ts'
import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReplaceableMergeStack extends Container, Object{
    atKey(arg0: string): Config;
    atPath(arg0: string): Config;
    hasDescendant(arg0: AbstractConfigValue): boolean;
    makeReplacement(arg0: ResolveContext, arg1: number): AbstractConfigValue;
    origin(): ConfigOrigin;
    render(): string;
    render(arg0: ConfigRenderOptions): string;
    replaceChild(arg0: AbstractConfigValue, arg1: AbstractConfigValue): AbstractConfigValue;
    unwrapped(): Object;
    valueType(): ConfigValueType;
    withFallback(arg0: ConfigMergeable): ConfigMergeable;
    withFallback(arg0: ConfigMergeable): ConfigValue;
    withOrigin(arg0: ConfigOrigin): ConfigValue;
}