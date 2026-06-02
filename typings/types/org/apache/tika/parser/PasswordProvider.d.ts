import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
export interface PasswordProvider extends Object{
    getPassword(arg0: Metadata): string;
}