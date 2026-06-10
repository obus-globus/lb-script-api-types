import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Schema } from '../../../../../net/minecraft/server/jsonrpc/api/Schema.d.ts'
export class ParamInfo<Param extends Object | number | string | boolean> extends Record {
    static typedCodec(): MapCodec<ParamInfo<Object>>;
    // private name: string;
    // private required: boolean;
    // private schema: Schema<Param>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    required(): boolean;
    schema(): Schema<Param>;
    toString(): string;
}