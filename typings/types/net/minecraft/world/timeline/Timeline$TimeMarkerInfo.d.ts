import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Timeline$TimeMarkerInfo extends Record {
    static CODEC: Codec<Timeline$TimeMarkerInfo>;
    private constructor(ticks: number, showInCommands: boolean)
    // private showInCommands: boolean;
    // private ticks: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    showInCommands(): boolean;
    ticks(): number;
    toString(): string;
}