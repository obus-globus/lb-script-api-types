import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraAimAssistPacketPayload_TargetMode extends Enum<CameraAimAssistPacketPayload_TargetMode> {
    static Angle: CameraAimAssistPacketPayload_TargetMode;
    static Distance: CameraAimAssistPacketPayload_TargetMode;
    static getByName(paramarg0: string): CameraAimAssistPacketPayload_TargetMode;
    static getByName(paramarg0: string, paramarg1: CameraAimAssistPacketPayload_TargetMode): CameraAimAssistPacketPayload_TargetMode;
    static getByValue(paramarg0: number): CameraAimAssistPacketPayload_TargetMode;
    static getByValue(paramarg0: number, paramarg1: CameraAimAssistPacketPayload_TargetMode): CameraAimAssistPacketPayload_TargetMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CameraAimAssistPacketPayload_TargetMode;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: CameraAimAssistPacketPayload_TargetMode)
    readonly value: number;
    getValue(): number;
    name(): "Angle" | "Distance";
}