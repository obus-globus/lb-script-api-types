import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { DescriptorRendererModifier$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererModifier$Companion.d.ts'
export class DescriptorRendererModifier extends Enum<DescriptorRendererModifier> {
    static ACTUAL: DescriptorRendererModifier;
    static ALL: DescriptorRendererModifier[];
    static ALL_EXCEPT_ANNOTATIONS: DescriptorRendererModifier[];
    static ANNOTATIONS: DescriptorRendererModifier;
    static CONST: DescriptorRendererModifier;
    static Companion: DescriptorRendererModifier$Companion;
    static DATA: DescriptorRendererModifier;
    static EXPECT: DescriptorRendererModifier;
    static FUN: DescriptorRendererModifier;
    static INLINE: DescriptorRendererModifier;
    static INNER: DescriptorRendererModifier;
    static LATEINIT: DescriptorRendererModifier;
    static MEMBER_KIND: DescriptorRendererModifier;
    static MODALITY: DescriptorRendererModifier;
    static OVERRIDE: DescriptorRendererModifier;
    static VALUE: DescriptorRendererModifier;
    static VISIBILITY: DescriptorRendererModifier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DescriptorRendererModifier;
    static values(): (Object | null)[];
    private constructor(arg2: boolean)
    // private includeByDefault: boolean;
    name(): "VISIBILITY" | "MODALITY" | "OVERRIDE" | "ANNOTATIONS" | "INNER" | "MEMBER_KIND" | "DATA" | "INLINE" | "EXPECT" | "ACTUAL" | "CONST" | "LATEINIT" | "FUN" | "VALUE";
}