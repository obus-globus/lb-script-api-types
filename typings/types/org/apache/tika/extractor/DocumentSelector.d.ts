import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export interface DocumentSelector extends Object{
    select(arg0: Metadata): boolean;
}