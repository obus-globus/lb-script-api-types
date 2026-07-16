import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RNN$Activation extends Enum<RNN$Activation> {
    static RELU: RNN$Activation;
    static TANH: RNN$Activation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RNN$Activation;
    static values(): RNN$Activation[];
    private constructor()
    name(): "RELU" | "TANH";
}