import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LegacySoundRewriter$SoundData extends Record {
    constructor(replacementSound: number, changePitch: boolean, newPitch: number, added: boolean)
    // private added: boolean;
    // private changePitch: boolean;
    // private newPitch: number;
    // private replacementSound: number;
    added(): boolean;
    changePitch(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    newPitch(): number;
    replacementSound(): number;
    toString(): string;
}