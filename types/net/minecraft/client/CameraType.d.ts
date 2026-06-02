import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CameraType extends Enum<CameraType> {
    static FIRST_PERSON: CameraType;
    static THIRD_PERSON_BACK: CameraType;
    static THIRD_PERSON_FRONT: CameraType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CameraType;
    static values(): (Object | null)[];
    private constructor(firstPerson: boolean, mirrored: boolean)
    readonly firstPerson: boolean;
    readonly mirrored: boolean;
    cycle(): CameraType;
    isFirstPerson(): boolean;
    isMirrored(): boolean;
    name(): "FIRST_PERSON" | "THIRD_PERSON_BACK" | "THIRD_PERSON_FRONT";
}