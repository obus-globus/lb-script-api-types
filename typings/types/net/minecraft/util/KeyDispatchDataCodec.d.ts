import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KeyDispatchDataCodec<A extends unknown> extends Record {
    static of<A extends unknown>(paramcodec: MapCodec<A>): KeyDispatchDataCodec<A>;
    constructor(codec: MapCodec<A>)
    // private codec: MapCodec<A>;
    codec(): MapCodec<A>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}