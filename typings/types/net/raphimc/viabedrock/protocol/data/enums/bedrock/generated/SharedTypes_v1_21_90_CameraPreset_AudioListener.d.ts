import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_v1_21_90_CameraPreset_AudioListener extends Enum<SharedTypes_v1_21_90_CameraPreset_AudioListener> {
    static Camera: SharedTypes_v1_21_90_CameraPreset_AudioListener;
    static Player: SharedTypes_v1_21_90_CameraPreset_AudioListener;
    static getByName(paramarg0: string): SharedTypes_v1_21_90_CameraPreset_AudioListener;
    static getByName(paramarg0: string, paramarg1: SharedTypes_v1_21_90_CameraPreset_AudioListener): SharedTypes_v1_21_90_CameraPreset_AudioListener;
    static getByValue(paramarg0: number): SharedTypes_v1_21_90_CameraPreset_AudioListener;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_v1_21_90_CameraPreset_AudioListener): SharedTypes_v1_21_90_CameraPreset_AudioListener;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SharedTypes_v1_21_90_CameraPreset_AudioListener;
    static values(): SharedTypes_v1_21_90_CameraPreset_AudioListener[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_v1_21_90_CameraPreset_AudioListener)
    readonly value: number;
    getValue(): number;
    name(): "Camera" | "Player";
}