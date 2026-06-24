import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class KineticWeapon$Condition extends Record {
    static CODEC: Codec<KineticWeapon$Condition>;
    static STREAM_CODEC: StreamCodec<ByteBuf, KineticWeapon$Condition>;
    static ofAttackerSpeed(paramuntilTicks: number, paramminAttackerSpeed: number): Optional<KineticWeapon$Condition>;
    static ofRelativeSpeed(paramuntilTicks: number, paramminRelativeSpeed: number): Optional<KineticWeapon$Condition>;
    constructor(maxDurationTicks: number, minSpeed: number, minRelativeSpeed: number)
    // private maxDurationTicks: number;
    // private minRelativeSpeed: number;
    // private minSpeed: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxDurationTicks(): number;
    minRelativeSpeed(): number;
    minSpeed(): number;
    test(ticksUsed: number, attackerSpeed: number, relativeSpeed: number, entityFactor: number): boolean;
    toString(): string;
}