import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MixinExtension$AnnotationTarget extends Enum<MixinExtension$AnnotationTarget> {
    static HARD: MixinExtension$AnnotationTarget;
    static SOFT: MixinExtension$AnnotationTarget;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinExtension$AnnotationTarget;
    static values(): (Object | null)[];
    private constructor()
    name(): "SOFT" | "HARD";
}