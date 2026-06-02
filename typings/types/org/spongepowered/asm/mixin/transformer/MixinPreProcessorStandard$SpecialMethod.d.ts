import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MixinPreProcessorStandard$SpecialMethod extends Enum<MixinPreProcessorStandard$SpecialMethod> {
    static ACCESSOR: MixinPreProcessorStandard$SpecialMethod;
    static INVOKER: MixinPreProcessorStandard$SpecialMethod;
    static MERGE: MixinPreProcessorStandard$SpecialMethod;
    static OVERWRITE: MixinPreProcessorStandard$SpecialMethod;
    static SHADOW: MixinPreProcessorStandard$SpecialMethod;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinPreProcessorStandard$SpecialMethod;
    static values(): (Object | null)[];
    private constructor(arg2: boolean)
    private constructor(arg2: boolean, arg3: Class<Annotation>)
    // private annotation: Class<Annotation>;
    // private description: string;
    // private isOverwrite: boolean;
    toString(): string;
    name(): "MERGE" | "OVERWRITE" | "SHADOW" | "ACCESSOR" | "INVOKER";
}