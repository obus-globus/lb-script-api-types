import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Abilities$Packed extends Record {
    static CODEC: Codec<Abilities$Packed>;
    // private flying: boolean;
    // private flyingSpeed: number;
    // private instabuild: boolean;
    // private invulnerable: boolean;
    // private mayBuild: boolean;
    // private mayFly: boolean;
    // private walkingSpeed: number;
    equals(o: Object | null): boolean;
    flying(): boolean;
    flyingSpeed(): number;
    hashCode(): number;
    instabuild(): boolean;
    invulnerable(): boolean;
    mayBuild(): boolean;
    mayFly(): boolean;
    toString(): string;
    walkingSpeed(): number;
}