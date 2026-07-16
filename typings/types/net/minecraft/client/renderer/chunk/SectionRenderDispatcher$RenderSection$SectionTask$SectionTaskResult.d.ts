import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult extends Enum<SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult> {
    static CANCELLED: SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
    static SUCCESSFUL: SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
    static values(): SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult[];
    private constructor()
    name(): "SUCCESSFUL" | "CANCELLED";
}