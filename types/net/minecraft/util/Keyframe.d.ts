import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Keyframe<T extends Object | number | string | boolean> extends Record {
    static codec(paramvalueCodec: Codec<Object>): Codec<Object>;
    // private ticks: number;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    ticks(): number;
    toString(): string;
    value(): T;
}