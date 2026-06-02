import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AnimationMode extends Enum<AnimationMode> {
    static Blocks: AnimationMode;
    static Layers: AnimationMode;
    static None: AnimationMode;
    static getByName(paramarg0: string): AnimationMode;
    static getByName(paramarg0: string, paramarg1: AnimationMode): AnimationMode;
    static getByValue(paramarg0: number): AnimationMode;
    static getByValue(paramarg0: number, paramarg1: AnimationMode): AnimationMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AnimationMode;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: AnimationMode)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Layers" | "Blocks";
}