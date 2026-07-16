import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Axolotl$AxolotlAnimationState extends Enum<Axolotl$AxolotlAnimationState> {
    static IN_AIR: Axolotl$AxolotlAnimationState;
    static IN_WATER: Axolotl$AxolotlAnimationState;
    static ON_GROUND: Axolotl$AxolotlAnimationState;
    static PLAYING_DEAD: Axolotl$AxolotlAnimationState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Axolotl$AxolotlAnimationState;
    static values(): Axolotl$AxolotlAnimationState[];
    private constructor()
    name(): "PLAYING_DEAD" | "IN_WATER" | "ON_GROUND" | "IN_AIR";
}