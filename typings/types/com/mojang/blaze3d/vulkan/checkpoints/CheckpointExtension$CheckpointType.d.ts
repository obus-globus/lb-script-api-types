import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CheckpointExtension$CheckpointType extends Enum<CheckpointExtension$CheckpointType> {
    static BEGIN_RENDER_PASS: CheckpointExtension$CheckpointType;
    static END_RENDER_PASS: CheckpointExtension$CheckpointType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CheckpointExtension$CheckpointType;
    static values(): (Object | null)[];
    private constructor()
    name(): "BEGIN_RENDER_PASS" | "END_RENDER_PASS";
}