import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Image$Flag extends Enum<Image$Flag> {
    static COLOR: Image$Flag;
    static GRAYSCALE: Image$Flag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Image$Flag;
    static values(): Image$Flag[];
    private constructor()
    numChannels(): number;
    name(): "GRAYSCALE" | "COLOR";
}