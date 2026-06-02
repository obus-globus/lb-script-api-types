import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class Gui$HeartType extends Enum<Gui$HeartType> {
    static ABSORBING: Gui$HeartType;
    static CONTAINER: Gui$HeartType;
    static FROZEN: Gui$HeartType;
    static NORMAL: Gui$HeartType;
    static POISIONED: Gui$HeartType;
    static WITHERED: Gui$HeartType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Gui$HeartType;
    static values(): (Object | null)[];
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