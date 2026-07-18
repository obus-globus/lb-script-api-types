import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigRenderOptions } from '../../../../com/typesafe/config/ConfigRenderOptions.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { ReplaceableMergeStack } from '../../../../com/typesafe/config/impl/ReplaceableMergeStack.d.ts'
import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { ResolveResult } from '../../../../com/typesafe/config/impl/ResolveResult.d.ts'
import type { ResolveSource } from '../../../../com/typesafe/config/impl/ResolveSource.d.ts'
import type { ResolveStatus } from '../../../../com/typesafe/config/impl/ResolveStatus.d.ts'
import type { Unmergeable } from '../../../../com/typesafe/config/impl/Unmergeable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigDelayedMerge extends AbstractConfigValue implements ReplaceableMergeStack, Unmergeable {
    constructor(arg0: ConfigOrigin, arg1: AbstractConfigValue[])
    // private stack: AbstractConfigValue[];
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    hasDescendant(arg0: AbstractConfigValue): boolean;
    hashCode(): number;
    ignoresFallbacks(): boolean;
    makeReplacement(arg0: ResolveContext, arg1: number): AbstractConfigValue;
    mergedWithNonObject(arg0: AbstractConfigValue): ConfigDelayedMerge;
    mergedWithNonObject(arg0: AbstractConfigValue[], arg1: AbstractConfigValue): AbstractConfigValue;
    mergedWithObject(arg0: JavaMap<any, any>): ConfigDelayedMerge;
    mergedWithObject(arg0: AbstractConfigValue[], arg1: JavaMap<any, any>): AbstractConfigValue;
    mergedWithTheUnmergeable(arg0: Unmergeable): ConfigDelayedMerge;
    mergedWithTheUnmergeable(arg0: AbstractConfigValue[], arg1: Unmergeable): AbstractConfigValue;
    newCopy(arg0: ConfigOrigin): AbstractConfigValue;
    relativized(arg0: Path): ConfigDelayedMerge;
    render(): string;
    render(arg0: ConfigRenderOptions): string;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: ConfigRenderOptions): void;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: string, arg4: ConfigRenderOptions): void;
    replaceChild(arg0: AbstractConfigValue, arg1: AbstractConfigValue): AbstractConfigValue;
    resolveStatus(): ResolveStatus;
    resolveSubstitutions(arg0: ResolveContext, arg1: ResolveSource): ResolveResult<AbstractConfigValue>;
    unmergedValues(): AbstractConfigValue[];
    unwrapped(): Object;
    valueType(): ConfigValueType;
}