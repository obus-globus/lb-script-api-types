import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CheckpointExtension$CheckpointType extends Enum<CheckpointExtension$CheckpointType> {
    static BEGIN_RENDER_PASS: CheckpointExtension$CheckpointType;
    static END_RENDER_PASS: CheckpointExtension$CheckpointType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CheckpointExtension$CheckpointType;
    static values(): CheckpointExtension$CheckpointType[];
    private constructor()
    name(): "BEGIN_RENDER_PASS" | "END_RENDER_PASS";
}