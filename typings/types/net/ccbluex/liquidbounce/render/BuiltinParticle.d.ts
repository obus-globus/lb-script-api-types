import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { DynamicTexture } from '../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class BuiltinParticle extends Enum<BuiltinParticle> implements Tagged {
    static CROWN: BuiltinParticle;
    static Companion: Tagged$Companion;
    static DOLLAR: BuiltinParticle;
    static HEART: BuiltinParticle;
    static LIGHTNING: BuiltinParticle;
    static LINE: BuiltinParticle;
    static ORBIZ: BuiltinParticle;
    static POINT: BuiltinParticle;
    static RHOMBUS: BuiltinParticle;
    static SNOWFLAKE: BuiltinParticle;
    static SPARK: BuiltinParticle;
    static STAR: BuiltinParticle;
    static getEntries(): BuiltinParticle[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): BuiltinParticle;
    static values(): BuiltinParticle[];
    private constructor(tag: string, fileName: string)
    readonly tag: string;
    readonly texture: DynamicTexture;
    name(): "ORBIZ" | "STAR" | "DOLLAR" | "CROWN" | "HEART" | "LIGHTNING" | "LINE" | "POINT" | "RHOMBUS" | "SNOWFLAKE" | "SPARK";
}