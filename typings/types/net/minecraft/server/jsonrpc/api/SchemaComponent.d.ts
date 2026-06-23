import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Schema } from '../../../../../net/minecraft/server/jsonrpc/api/Schema.d.ts'
export class SchemaComponent<T extends unknown> extends Record {
    constructor(name: string, ref: URI, schema: Schema<T>)
    // private name: string;
    // private ref: URI;
    // private schema: Schema<T>;
    asArray(): Schema<T[]>;
    asRef(): Schema<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    ref(): URI;
    schema(): Schema<T>;
    toString(): string;
}