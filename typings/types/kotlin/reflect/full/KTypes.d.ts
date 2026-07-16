import type { Object } from '../../../java/lang/Object.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export class KTypes extends Object {
    static isSubtypeOf(self: KType, other: KType): boolean;
    static isSupertypeOf(self: KType, other: KType): boolean;
    static withNullability(self: KType, nullable: boolean): KType;
}