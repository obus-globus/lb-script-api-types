import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraAimAssist_TargetMode extends Enum<CameraAimAssist_TargetMode> {
    static angle: CameraAimAssist_TargetMode;
    static distance: CameraAimAssist_TargetMode;
    static getByName(paramarg0: string): CameraAimAssist_TargetMode;
    static getByName(paramarg0: string, paramarg1: CameraAimAssist_TargetMode): CameraAimAssist_TargetMode;
    static getByValue(paramarg0: number): CameraAimAssist_TargetMode;
    static getByValue(paramarg0: number, paramarg1: CameraAimAssist_TargetMode): CameraAimAssist_TargetMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CameraAimAssist_TargetMode;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: CameraAimAssist_TargetMode)
    readonly value: number;
    getValue(): number;
    name(): "angle" | "distance";
}