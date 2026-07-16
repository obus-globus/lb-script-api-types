import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientInput } from '../../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { Input } from '../../../../../net/minecraft/world/entity/player/Input.d.ts'
export class InputExtensionsKt extends Object {
    static copy(self: Input, forward: boolean, backward: boolean, left: boolean, right: boolean, jump: boolean, sneak: boolean, sprint: boolean): Input;
    static getAnyHorizontal(paramarg0: Input): boolean;
    static set(self: ClientInput, forward: boolean, backward: boolean, left: boolean, right: boolean, jump: boolean, sneak: boolean, sprint: boolean): void;
}