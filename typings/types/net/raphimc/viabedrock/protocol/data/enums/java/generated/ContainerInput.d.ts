import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ContainerInput extends Enum<ContainerInput> {
    static CLONE: ContainerInput;
    static PICKUP: ContainerInput;
    static PICKUP_ALL: ContainerInput;
    static QUICK_CRAFT: ContainerInput;
    static QUICK_MOVE: ContainerInput;
    static SWAP: ContainerInput;
    static THROW: ContainerInput;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ContainerInput;
    static values(): (Object | null)[];
    private constructor()
    name(): "PICKUP" | "QUICK_MOVE" | "SWAP" | "CLONE" | "THROW" | "QUICK_CRAFT" | "PICKUP_ALL";
}