import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
export class ServerStatus$Players extends Record {
    static CODEC: Codec<ServerStatus$Players>;
    // private max: number;
    // private online: number;
    // private sample: NameAndId[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    max(): number;
    online(): number;
    sample(): NameAndId[];
    toString(): string;
}