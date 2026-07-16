import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ProgramGroup } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramGroup.d.ts'
export class ProgramArrayId extends Enum<ProgramArrayId> {
    static Begin: ProgramArrayId;
    static Composite: ProgramArrayId;
    static Deferred: ProgramArrayId;
    static Prepare: ProgramArrayId;
    static Setup: ProgramArrayId;
    static ShadowComposite: ProgramArrayId;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ProgramArrayId;
    static values(): ProgramArrayId[];
    private constructor(arg2: ProgramGroup, arg3: number)
    readonly group: ProgramGroup;
    readonly numPrograms: number;
    getGroup(): ProgramGroup;
    getNumPrograms(): number;
    getSourcePrefix(): string;
    name(): "Setup" | "Begin" | "ShadowComposite" | "Prepare" | "Deferred" | "Composite";
}