import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class IdDispatchCodec$Entry<B extends unknown, V extends unknown, T extends unknown> extends Record {
    private constructor(serializer: StreamCodec<B, V>, type: T)
    // private serializer: StreamCodec<B, V>;
    // private type: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    serializer(): StreamCodec<B, V>;
    toString(): string;
    type(): T;
}