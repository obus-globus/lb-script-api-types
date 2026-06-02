import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult extends Enum<SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult> {
    static CANCELLED: SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult;
    static SUCCESSFUL: SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "SUCCESSFUL" | "CANCELLED";
}