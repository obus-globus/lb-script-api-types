import type { ConfigException$NotResolved } from '../../../../com/typesafe/config/ConfigException$NotResolved.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigRenderOptions } from '../../../../com/typesafe/config/ConfigRenderOptions.d.ts'
import type { ConfigValueType } from '../../../../com/typesafe/config/ConfigValueType.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { ResolveResult } from '../../../../com/typesafe/config/impl/ResolveResult.d.ts'
import type { ResolveSource } from '../../../../com/typesafe/config/impl/ResolveSource.d.ts'
import type { ResolveStatus } from '../../../../com/typesafe/config/impl/ResolveStatus.d.ts'
import type { SubstitutionExpression } from '../../../../com/typesafe/config/impl/SubstitutionExpression.d.ts'
import type { Unmergeable } from '../../../../com/typesafe/config/impl/Unmergeable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigReference extends AbstractConfigValue implements Unmergeable {
    constructor(arg0: ConfigOrigin, arg1: SubstitutionExpression)
    // private expr: SubstitutionExpression;
    // private prefixLength: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    expression(): SubstitutionExpression;
    hashCode(): number;
    ignoresFallbacks(): boolean;
    newCopy(arg0: ConfigOrigin): ConfigReference;
    // private notResolved(): ConfigException$NotResolved;
    relativized(arg0: Path): ConfigReference;
    render(): string;
    render(arg0: ConfigRenderOptions): string;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: ConfigRenderOptions): void;
    render(arg0: StringBuilder, arg1: number, arg2: boolean, arg3: string, arg4: ConfigRenderOptions): void;
    resolveStatus(): ResolveStatus;
    resolveSubstitutions(arg0: ResolveContext, arg1: ResolveSource): ResolveResult<AbstractConfigValue>;
    unmergedValues(): ConfigReference[];
    unwrapped(): Object;
    valueType(): ConfigValueType;
}