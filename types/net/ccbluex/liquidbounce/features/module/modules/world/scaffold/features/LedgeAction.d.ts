import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { LedgeAction$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/LedgeAction$Companion.d.ts'
export class LedgeAction extends Record {
    static Companion: LedgeAction$Companion;
    static NO_LEDGE: LedgeAction;
    constructor(jump: boolean, sneakTime: number, stopInput: boolean, stepBack: boolean)
    // private jump: boolean;
    /*not mapped: */ jump(): boolean;
    // private sneakTime: number;
    /*not mapped: */ sneakTime(): number;
    // private stepBack: boolean;
    /*not mapped: */ stepBack(): boolean;
    // private stopInput: boolean;
    /*not mapped: */ stopInput(): boolean;
    component1(): boolean;
    component2(): number;
    component3(): boolean;
    component4(): boolean;
    copy(jump: boolean, sneakTime: number, stopInput: boolean, stepBack: boolean): LedgeAction;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}