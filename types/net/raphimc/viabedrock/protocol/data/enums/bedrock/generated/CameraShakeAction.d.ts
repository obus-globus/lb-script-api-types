import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraShakeAction extends Enum<CameraShakeAction> {
    static Add: CameraShakeAction;
    static Stop: CameraShakeAction;
    static getByName(paramarg0: string): CameraShakeAction;
    static getByName(paramarg0: string, paramarg1: CameraShakeAction): CameraShakeAction;
    static getByValue(paramarg0: number): CameraShakeAction;
    static getByValue(paramarg0: number, paramarg1: CameraShakeAction): CameraShakeAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CameraShakeAction;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: CameraShakeAction)
    readonly value: number;
    getValue(): number;
    name(): "Add" | "Stop";
}