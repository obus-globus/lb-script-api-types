import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
export class TypeOfImplKt extends Object {
    static createMutableCollectionKType(type: KType): KType;
    static createNothingType(type: KType): KType;
    static createPlatformKType(lowerBound: KType, upperBound: KType, isRawType: boolean): KType;
}