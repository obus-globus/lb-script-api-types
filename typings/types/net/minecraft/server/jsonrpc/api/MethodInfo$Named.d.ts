import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MethodInfo } from '../../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
export class MethodInfo$Named<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Record {
    static CODEC: Codec<Object>;
    static typedCodec(): Codec<Object>;
    constructor(name: Identifier, contents: MethodInfo<Params, Result>)
    // private contents: MethodInfo<Params, Result>;
    // private name: Identifier;
    contents(): MethodInfo<Params, Result>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): Identifier;
    toString(): string;
}