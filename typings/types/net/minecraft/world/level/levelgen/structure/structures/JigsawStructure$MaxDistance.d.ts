import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JigsawStructure$MaxDistance extends Record {
    static CODEC: Codec<JigsawStructure$MaxDistance>;
    // private horizontal: number;
    // private vertical: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    horizontal(): number;
    toString(): string;
    vertical(): number;
}