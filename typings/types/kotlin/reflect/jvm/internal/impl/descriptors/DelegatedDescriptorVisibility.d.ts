import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Visibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
export abstract class DelegatedDescriptorVisibility extends DescriptorVisibility {
    constructor(arg0: Visibility)
    readonly delegate: Visibility;
    getDelegate(): Visibility;
    getInternalDisplayName(): string;
    normalize(): DescriptorVisibility;
}