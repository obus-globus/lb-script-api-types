import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerStorage$PlayerInput extends Record {
    constructor(forward: boolean, backward: boolean, left: boolean, right: boolean, jump: boolean, sneak: boolean, sprint: boolean)
    // private backward: boolean;
    // private forward: boolean;
    // private jump: boolean;
    // private left: boolean;
    // private right: boolean;
    // private sneak: boolean;
    // private sprint: boolean;
    backward(): boolean;
    equals(arg0: Object | null): boolean;
    forward(): boolean;
    hashCode(): number;
    jump(): boolean;
    left(): boolean;
    right(): boolean;
    sneak(): boolean;
    sprint(): boolean;
    toString(): string;
}