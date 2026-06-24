import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldBorder } from '../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export class WorldBorder$Settings extends Record {
    static CODEC: Codec<WorldBorder$Settings>;
    static DEFAULT: WorldBorder$Settings;
    constructor(centerX: number, centerZ: number, damagePerBlock: number, safeZone: number, warningBlocks: number, warningTime: number, size: number, lerpTime: number, lerpTarget: number)
    constructor(worldBorder: WorldBorder)
    // private centerX: number;
    // private centerZ: number;
    // private damagePerBlock: number;
    // private lerpTarget: number;
    // private lerpTime: number;
    // private safeZone: number;
    // private size: number;
    // private warningBlocks: number;
    // private warningTime: number;
    centerX(): number;
    centerZ(): number;
    damagePerBlock(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lerpTarget(): number;
    lerpTime(): number;
    safeZone(): number;
    size(): number;
    toString(): string;
    warningBlocks(): number;
    warningTime(): number;
}