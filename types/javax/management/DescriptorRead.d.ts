import type { Descriptor } from '../../javax/management/Descriptor.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface DescriptorRead extends Object{
    getDescriptor(): Descriptor;
}