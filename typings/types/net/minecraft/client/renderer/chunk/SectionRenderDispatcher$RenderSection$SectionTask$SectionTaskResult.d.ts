import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult extends Enum<SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult> {
    static CANCELLED: SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
    static SUCCESSFUL: SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "SUCCESSFUL" | "CANCELLED";
}