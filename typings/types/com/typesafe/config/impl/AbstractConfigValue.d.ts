import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConfigMergeable } from '../../../../com/typesafe/config/ConfigMergeable.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigRenderOptions } from '../../../../com/typesafe/config/ConfigRenderOptions.d.ts'
import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { MergeableValue } from '../../../../com/typesafe/config/impl/MergeableValue.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { ResolveResult } from '../../../../com/typesafe/config/impl/ResolveResult.d.ts'
import type { ResolveSource } from '../../../../com/typesafe/config/impl/ResolveSource.d.ts'
import type { ResolveStatus } from '../../../../com/typesafe/config/impl/ResolveStatus.d.ts'
import type { SimpleConfig } from '../../../../com/typesafe/config/impl/SimpleConfig.d.ts'
import type { SimpleConfigOrigin } from '../../../../com/typesafe/config/impl/SimpleConfigOrigin.d.ts'
import type { Unmergeable } from '../../../../com/typesafe/config/impl/Unmergeable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractConfigValue extends Object implements ConfigValue, MergeableValue {
    constructor(arg0: ConfigOrigin)
    // private origin: SimpleConfigOrigin;
    appendHiddenEnvVariableValue(arg0: StringBuilder): void;
    atKey(arg0: ConfigOrigin, arg1: string): SimpleConfig;
    atKey(arg0: string): SimpleConfig;
    atPath(arg0: ConfigOrigin, arg1: Path): SimpleConfig;
    atPath(arg0: string): SimpleConfig;
    canEqual(arg0: Object): boolean;
    constructDelayedMerge(arg0: ConfigOrigin, arg1: AbstractConfigValue[]): AbstractConfigValue;
    // private delayMerge(arg0: AbstractConfigValue[], arg1: AbstractConfigValue): AbstractConfigValue;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hideEnvVariableValue(arg0: ConfigRenderOptions): boolean;
    ignoresFallbacks(): boolean;
    mergedWithNonObject(arg0: AbstractConfigValue): AbstractConfigValue;
    mergedWithNonObject(arg0: AbstractConfigValue[], arg1: AbstractConfigValue): AbstractConfigValue;
    mergedWithObject(arg0: JavaMap<any, any>): AbstractConfigValue;
    mergedWithObject(arg0: AbstractConfigValue[], arg1: JavaMap<any, any>): AbstractConfigValue;
    mergedWithTheUnmergeable(arg0: Unmergeable): AbstractConfigValue;
    mergedWithTheUnmergeable(arg0: AbstractConfigValue[], arg1: Unmergeable): AbstractConfigValue;
    newCopy(arg0: ConfigOrigin): AbstractConfigValue;
    origin(): SimpleConfigOrigin;
    relativized(arg0: Path): AbstractConfigValue;
    render(): string;
    render(arg0: ConfigRenderOptions): string;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: ConfigRenderOptions): void;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: string, arg4: ConfigRenderOptions): void;
    requireNotIgnoringFallbacks(): void;
    resolveStatus(): ResolveStatus;
    resolveSubstitutions(arg0: ResolveContext, arg1: ResolveSource): ResolveResult<AbstractConfigValue>;
    toFallbackValue(): AbstractConfigValue;
    toString(): string;
    transformToString(): string;
    unwrapped(): Object;
    valueType(): ConfigValueType;
    withFallback(arg0: ConfigMergeable): AbstractConfigValue;
    withFallbacksIgnored(): AbstractConfigValue;
    withOrigin(arg0: ConfigOrigin): AbstractConfigValue;
}