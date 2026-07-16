import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Schema } from '../../../../../net/minecraft/server/jsonrpc/api/Schema.d.ts'
export class ResultInfo<Result extends unknown> extends Record {
    static typedCodec<Result extends unknown>(): Codec<ResultInfo<Result>>;
    constructor(name: string, schema: Schema<Result>)
    // private name: string;
    // private schema: Schema<Result>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    schema(): Schema<Result>;
    toString(): string;
}