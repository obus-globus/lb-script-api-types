import type { ConfigResolveOptions } from '../../../../com/typesafe/config/ConfigResolveOptions.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { MemoKey } from '../../../../com/typesafe/config/impl/MemoKey.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { ResolveMemos } from '../../../../com/typesafe/config/impl/ResolveMemos.d.ts'
import type { ResolveResult } from '../../../../com/typesafe/config/impl/ResolveResult.d.ts'
import type { ResolveSource } from '../../../../com/typesafe/config/impl/ResolveSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResolveContext extends Object {
    constructor(arg0: ConfigResolveOptions, arg1: Path)
    constructor(arg0: ResolveMemos, arg1: ConfigResolveOptions, arg2: Path, arg3: AbstractConfigValue[], arg4: AbstractConfigValue[])
    // private cycleMarkers: AbstractConfigValue[];
    // private memos: ResolveMemos;
    // private options: ConfigResolveOptions;
    // private resolveStack: AbstractConfigValue[];
    // private restrictToChild: Path;
    addCycleMarker(arg0: AbstractConfigValue): ResolveContext;
    depth(): number;
    isRestrictedToChild(): boolean;
    // private memoize(arg0: MemoKey, arg1: AbstractConfigValue): ResolveContext;
    options(): ConfigResolveOptions;
    popTrace(): ResolveContext;
    // private pushTrace(arg0: AbstractConfigValue): ResolveContext;
    // private realResolve(arg0: AbstractConfigValue, arg1: ResolveSource): ResolveResult<AbstractConfigValue>;
    removeCycleMarker(arg0: AbstractConfigValue): ResolveContext;
    resolve(arg0: AbstractConfigValue, arg1: ResolveSource): ResolveResult<AbstractConfigValue>;
    restrict(arg0: Path): ResolveContext;
    restrictToChild(): Path;
    traceString(): string;
    unrestricted(): ResolveContext;
}