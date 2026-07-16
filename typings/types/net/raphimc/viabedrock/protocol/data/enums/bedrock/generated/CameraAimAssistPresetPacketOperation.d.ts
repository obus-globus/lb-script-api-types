import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraAimAssistPresetPacketOperation extends Enum<CameraAimAssistPresetPacketOperation> {
    static AAA: CameraAimAssistPresetPacketOperation;
    static getByName(paramarg0: string): CameraAimAssistPresetPacketOperation;
    static getByName(paramarg0: string, paramarg1: CameraAimAssistPresetPacketOperation): CameraAimAssistPresetPacketOperation;
    static getByValue(paramarg0: number): CameraAimAssistPresetPacketOperation;
    static getByValue(paramarg0: number, paramarg1: CameraAimAssistPresetPacketOperation): CameraAimAssistPresetPacketOperation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CameraAimAssistPresetPacketOperation;
    static values(): CameraAimAssistPresetPacketOperation[];
    private constructor(arg2: number)
    private constructor(arg2: CameraAimAssistPresetPacketOperation)
    readonly value: number;
    getValue(): number;
    name(): "AAA";
}