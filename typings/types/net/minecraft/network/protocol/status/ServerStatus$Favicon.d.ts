import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ServerStatus$Favicon extends Record {
    static CODEC: Codec<ServerStatus$Favicon>;
    constructor(iconBytes: number[])
    // private iconBytes: number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    iconBytes(): number[];
    toString(): string;
}