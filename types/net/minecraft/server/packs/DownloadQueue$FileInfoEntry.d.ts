import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DownloadQueue$FileInfoEntry extends Record {
    static CODEC: Codec<DownloadQueue$FileInfoEntry>;
    // private name: string;
    // private size: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    size(): number;
    toString(): string;
}