import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraAimAssistPacketPayload_Action extends Enum<CameraAimAssistPacketPayload_Action> {
    static Clear: CameraAimAssistPacketPayload_Action;
    static Set: CameraAimAssistPacketPayload_Action;
    static getByName(paramarg0: string): CameraAimAssistPacketPayload_Action;
    static getByName(paramarg0: string, paramarg1: CameraAimAssistPacketPayload_Action): CameraAimAssistPacketPayload_Action;
    static getByValue(paramarg0: number): CameraAimAssistPacketPayload_Action;
    static getByValue(paramarg0: number, paramarg1: CameraAimAssistPacketPayload_Action): CameraAimAssistPacketPayload_Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CameraAimAssistPacketPayload_Action;
    static values(): CameraAimAssistPacketPayload_Action[];
    private constructor(arg2: number)
    private constructor(arg2: CameraAimAssistPacketPayload_Action)
    readonly value: number;
    getValue(): number;
    name(): "Set" | "Clear";
}