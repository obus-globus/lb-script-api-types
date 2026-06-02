import type { DirectionalInput } from '../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { Options } from '../../../../net/minecraft/client/Options.d.ts'
import type { ClientInput } from '../../../../net/minecraft/client/player/ClientInput.d.ts'
export class KeyboardInput extends ClientInput {
    static calculateImpulse(parampositive: boolean, paramnegative: boolean): number;
    constructor(options: Options)
    // private options: Options;
    tick(): void;
    // private transformDirection(arg0: DirectionalInput): DirectionalInput;
}