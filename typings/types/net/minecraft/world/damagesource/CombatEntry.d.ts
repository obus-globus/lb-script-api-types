import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { FallLocation } from '../../../../net/minecraft/world/damagesource/FallLocation.d.ts'
export class CombatEntry extends Record {
    constructor(source: DamageSource, damage: number, fallLocation: FallLocation, fallDistance: number)
    // private damage: number;
    // private fallDistance: number;
    // private fallLocation: FallLocation;
    // private source: DamageSource;
    damage(): number;
    equals(o: Object | null): boolean;
    fallDistance(): number;
    fallLocation(): FallLocation;
    hashCode(): number;
    source(): DamageSource;
    toString(): string;
}