import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ServerStatus$Version extends Record {
    static CODEC: Codec<ServerStatus$Version>;
    static current(): ServerStatus$Version;
    constructor(name: string, protocol: number)
    // private name: string;
    // private protocol: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    protocol(): number;
    toString(): string;
}