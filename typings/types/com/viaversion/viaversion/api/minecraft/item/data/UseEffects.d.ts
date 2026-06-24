import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class UseEffects extends Record {
    static TYPE: Type<UseEffects>;
    constructor(canSprint: boolean, interactVibrations: boolean, speedMultiplier: number)
    // private canSprint: boolean;
    // private interactVibrations: boolean;
    // private speedMultiplier: number;
    canSprint(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    interactVibrations(): boolean;
    speedMultiplier(): number;
    toString(): string;
}