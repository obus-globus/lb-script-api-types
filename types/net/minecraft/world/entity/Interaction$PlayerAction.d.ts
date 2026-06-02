import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Interaction$PlayerAction extends Record {
    static CODEC: Codec<Interaction$PlayerAction>;
    // private player: UUID;
    // private timestamp: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    player(): UUID;
    timestamp(): number;
    toString(): string;
}