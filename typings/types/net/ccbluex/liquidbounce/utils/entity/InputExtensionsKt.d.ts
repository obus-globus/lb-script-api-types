import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientInput } from '../../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { Input } from '../../../../../net/minecraft/world/entity/player/Input.d.ts'
export class InputExtensionsKt extends Object {
    static copy(paramarg0: Input, paramarg1: boolean, paramarg2: boolean, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean, paramarg6: boolean, paramarg7: boolean): Input;
    static getAnyHorizontal(paramarg0: Input): boolean;
    static set(paramarg0: ClientInput, paramarg1: boolean, paramarg2: boolean, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean, paramarg6: boolean, paramarg7: boolean): void;
}