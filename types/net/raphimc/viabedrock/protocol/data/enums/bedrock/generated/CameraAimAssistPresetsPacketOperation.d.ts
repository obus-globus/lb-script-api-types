import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraAimAssistPresetsPacketOperation extends Enum<CameraAimAssistPresetsPacketOperation> {
    static AddToExisting: CameraAimAssistPresetsPacketOperation;
    static Set: CameraAimAssistPresetsPacketOperation;
    static getByName(paramarg0: string): CameraAimAssistPresetsPacketOperation;
    static getByName(paramarg0: string, paramarg1: CameraAimAssistPresetsPacketOperation): CameraAimAssistPresetsPacketOperation;
    static getByValue(paramarg0: number): CameraAimAssistPresetsPacketOperation;
    static getByValue(paramarg0: number, paramarg1: CameraAimAssistPresetsPacketOperation): CameraAimAssistPresetsPacketOperation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CameraAimAssistPresetsPacketOperation;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: CameraAimAssistPresetsPacketOperation)
    readonly value: number;
    getValue(): number;
    name(): "Set" | "AddToExisting";
}