import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class Hud$HeartType extends Enum<Hud$HeartType> {
    static ABSORBING: Hud$HeartType;
    static CONTAINER: Hud$HeartType;
    static FROZEN: Hud$HeartType;
    static NORMAL: Hud$HeartType;
    static POISIONED: Hud$HeartType;
    static WITHERED: Hud$HeartType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Hud$HeartType;
    static values(): Hud$HeartType[];
    private constructor(full: Identifier, fullBlinking: Identifier, half: Identifier, halfBlinking: Identifier, hardcoreFull: Identifier, hardcoreFullBlinking: Identifier, hardcoreHalf: Identifier, hardcoreHalfBlinking: Identifier)
    // private full: Identifier;
    // private fullBlinking: Identifier;
    // private half: Identifier;
    // private halfBlinking: Identifier;
    // private hardcoreFull: Identifier;
    // private hardcoreFullBlinking: Identifier;
    // private hardcoreHalf: Identifier;
    // private hardcoreHalfBlinking: Identifier;
    getSprite(isHardcore: boolean, isHalf: boolean, isBlink: boolean): Identifier;
    name(): "CONTAINER" | "NORMAL" | "POISIONED" | "WITHERED" | "ABSORBING" | "FROZEN";
}