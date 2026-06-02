import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SubtitleOverlay$SoundPlayedAt extends Record {
    // private location: Vec3;
    // private time: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    location(): Vec3;
    time(): number;
    toString(): string;
}