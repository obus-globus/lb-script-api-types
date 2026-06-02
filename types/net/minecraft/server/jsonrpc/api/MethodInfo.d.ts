import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MethodInfo$Named } from '../../../../../net/minecraft/server/jsonrpc/api/MethodInfo$Named.d.ts'
import type { ParamInfo } from '../../../../../net/minecraft/server/jsonrpc/api/ParamInfo.d.ts'
import type { ResultInfo } from '../../../../../net/minecraft/server/jsonrpc/api/ResultInfo.d.ts'
export class MethodInfo<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Record {
    constructor(description: string, params: Optional<ParamInfo<Params>>, result: Optional<ResultInfo<Result>>)
    constructor(description: string, paramInfo: ParamInfo<Params>, resultInfo: ResultInfo<Result>)
    // private description: string;
    // private params: Optional<ParamInfo<Params>>;
    // private result: Optional<ResultInfo<Result>>;
    description(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    named(name: Identifier): MethodInfo$Named<Params, Result>;
    params(): Optional<ParamInfo<Params>>;
    result(): Optional<ResultInfo<Result>>;
    toString(): string;
}