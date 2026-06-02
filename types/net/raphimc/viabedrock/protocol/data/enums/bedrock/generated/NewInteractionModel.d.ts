import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class NewInteractionModel extends Enum<NewInteractionModel> {
    static Classic: NewInteractionModel;
    static Crosshair: NewInteractionModel;
    static Touch: NewInteractionModel;
    static getByName(paramarg0: string): NewInteractionModel;
    static getByName(paramarg0: string, paramarg1: NewInteractionModel): NewInteractionModel;
    static getByValue(paramarg0: number): NewInteractionModel;
    static getByValue(paramarg0: number, paramarg1: NewInteractionModel): NewInteractionModel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NewInteractionModel;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: NewInteractionModel)
    readonly value: number;
    getValue(): number;
    name(): "Touch" | "Crosshair" | "Classic";
}