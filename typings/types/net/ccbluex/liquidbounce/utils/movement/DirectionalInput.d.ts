import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DirectionalInput$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput$Companion.d.ts'
import type { ClientInput } from '../../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { Input } from '../../../../../net/minecraft/world/entity/player/Input.d.ts'
export class DirectionalInput extends Object {
    static BACKWARDS: DirectionalInput;
    static BACKWARDS_LEFT: DirectionalInput;
    static BACKWARDS_RIGHT: DirectionalInput;
    static Companion: DirectionalInput$Companion;
    static FORWARDS: DirectionalInput;
    static FORWARDS_LEFT: DirectionalInput;
    static FORWARDS_RIGHT: DirectionalInput;
    static LEFT: DirectionalInput;
    static NONE: DirectionalInput;
    static RIGHT: DirectionalInput;
    constructor(forwards: boolean, backwards: boolean, left: boolean, right: boolean)
    constructor(movementForward: number, movementSideways: number)
    constructor(input: ClientInput)
    constructor(input: Input)
    readonly backwards: boolean;
    readonly forwards: boolean;
    /*not mapped: */ isMoving(): boolean;
    readonly left: boolean;
    readonly right: boolean;
    component1(): boolean;
    component2(): boolean;
    component3(): boolean;
    component4(): boolean;
    copy(forwards: boolean, backwards: boolean, left: boolean, right: boolean): DirectionalInput;
    equals(other: Object | null): boolean;
    hashCode(): number;
    invert(): DirectionalInput;
    toString(): string;
}