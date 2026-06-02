import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PotionEffectData extends Record {
    static OPTIONAL_TYPE: Type<PotionEffectData>;
    static TYPE: Type<PotionEffectData>;
    // private ambient: boolean;
    // private amplifier: number;
    // private duration: number;
    // private hiddenEffect: PotionEffectData;
    // private showIcon: boolean;
    // private showParticles: boolean;
    ambient(): boolean;
    amplifier(): number;
    duration(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hiddenEffect(): PotionEffectData;
    showIcon(): boolean;
    showParticles(): boolean;
    toString(): string;
}