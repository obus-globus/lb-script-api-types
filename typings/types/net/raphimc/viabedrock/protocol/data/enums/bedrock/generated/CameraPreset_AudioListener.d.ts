import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CameraPreset_AudioListener extends Enum<CameraPreset_AudioListener> {
    static Camera: CameraPreset_AudioListener;
    static Player: CameraPreset_AudioListener;
    static getByName(paramarg0: string): CameraPreset_AudioListener;
    static getByName(paramarg0: string, paramarg1: CameraPreset_AudioListener): CameraPreset_AudioListener;
    static getByValue(paramarg0: number): CameraPreset_AudioListener;
    static getByValue(paramarg0: number, paramarg1: CameraPreset_AudioListener): CameraPreset_AudioListener;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CameraPreset_AudioListener;
    static values(): CameraPreset_AudioListener[];
    private constructor(arg2: number)
    private constructor(arg2: CameraPreset_AudioListener)
    readonly value: number;
    getValue(): number;
    name(): "Camera" | "Player";
}