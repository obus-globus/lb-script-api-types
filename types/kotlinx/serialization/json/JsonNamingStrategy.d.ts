import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export interface JsonNamingStrategy extends Object{
    serialNameForJson(descriptor: SerialDescriptor, elementIndex: number, serialName: string): string;
}