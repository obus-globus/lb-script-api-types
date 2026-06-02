import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClientCameraAimAssistPacketAction extends Enum<ClientCameraAimAssistPacketAction> {
    static Clear: ClientCameraAimAssistPacketAction;
    static SetFromCameraPreset: ClientCameraAimAssistPacketAction;
    static getByName(paramarg0: string): ClientCameraAimAssistPacketAction;
    static getByName(paramarg0: string, paramarg1: ClientCameraAimAssistPacketAction): ClientCameraAimAssistPacketAction;
    static getByValue(paramarg0: number): ClientCameraAimAssistPacketAction;
    static getByValue(paramarg0: number, paramarg1: ClientCameraAimAssistPacketAction): ClientCameraAimAssistPacketAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientCameraAimAssistPacketAction;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ClientCameraAimAssistPacketAction)
    readonly value: number;
    getValue(): number;
    name(): "SetFromCameraPreset" | "Clear";
}