import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementProgress } from '../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class PlayerAdvancements$Data extends Record {
    static CODEC: Codec<PlayerAdvancements$Data>;
    private constructor(map: Map<Identifier, AdvancementProgress>)
    // private map: Map<Identifier, AdvancementProgress>;
    equals(o: Object | null): boolean;
    forEach(consumer: (param0: Identifier, param1: AdvancementProgress) => void): void;
    hashCode(): number;
    map(): Map<Identifier, AdvancementProgress>;
    toString(): string;
}