import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ProgramGroup extends Enum<ProgramGroup> {
    static Begin: ProgramGroup;
    static Composite: ProgramGroup;
    static Deferred: ProgramGroup;
    static Dh: ProgramGroup;
    static Final: ProgramGroup;
    static Gbuffers: ProgramGroup;
    static Prepare: ProgramGroup;
    static Setup: ProgramGroup;
    static Shadow: ProgramGroup;
    static ShadowComposite: ProgramGroup;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ProgramGroup;
    static values(): ProgramGroup[];
    private constructor(arg2: string)
    readonly baseName: string;
    getBaseName(): string;
    name(): "Setup" | "Begin" | "Shadow" | "ShadowComposite" | "Prepare" | "Gbuffers" | "Deferred" | "Composite" | "Final" | "Dh";
}