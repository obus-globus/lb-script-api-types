import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraShakeType extends Enum<CameraShakeType> {
    static Positional: CameraShakeType;
    static Rotational: CameraShakeType;
    static getByName(paramarg0: string): CameraShakeType;
    static getByName(paramarg0: string, paramarg1: CameraShakeType): CameraShakeType;
    static getByValue(paramarg0: number): CameraShakeType;
    static getByValue(paramarg0: number, paramarg1: CameraShakeType): CameraShakeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CameraShakeType;
    static values(): CameraShakeType[];
    private constructor(arg2: number)
    private constructor(arg2: CameraShakeType)
    readonly value: number;
    getValue(): number;
    name(): "Positional" | "Rotational";
}