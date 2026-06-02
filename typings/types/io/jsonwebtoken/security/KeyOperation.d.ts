import type { Identifiable } from '../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyOperation extends Identifiable, Object{
    getDescription(): string;
    isRelated(arg0: KeyOperation): boolean;
}