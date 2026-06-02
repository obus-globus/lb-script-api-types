import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ArrayTypeSignature } from '../../../../sun/reflect/generics/tree/ArrayTypeSignature.d.ts'
import type { BooleanSignature } from '../../../../sun/reflect/generics/tree/BooleanSignature.d.ts'
import type { BottomSignature } from '../../../../sun/reflect/generics/tree/BottomSignature.d.ts'
import type { ByteSignature } from '../../../../sun/reflect/generics/tree/ByteSignature.d.ts'
import type { CharSignature } from '../../../../sun/reflect/generics/tree/CharSignature.d.ts'
import type { ClassTypeSignature } from '../../../../sun/reflect/generics/tree/ClassTypeSignature.d.ts'
import type { DoubleSignature } from '../../../../sun/reflect/generics/tree/DoubleSignature.d.ts'
import type { FloatSignature } from '../../../../sun/reflect/generics/tree/FloatSignature.d.ts'
import type { FormalTypeParameter } from '../../../../sun/reflect/generics/tree/FormalTypeParameter.d.ts'
import type { IntSignature } from '../../../../sun/reflect/generics/tree/IntSignature.d.ts'
import type { LongSignature } from '../../../../sun/reflect/generics/tree/LongSignature.d.ts'
import type { ShortSignature } from '../../../../sun/reflect/generics/tree/ShortSignature.d.ts'
import type { SimpleClassTypeSignature } from '../../../../sun/reflect/generics/tree/SimpleClassTypeSignature.d.ts'
import type { TypeVariableSignature } from '../../../../sun/reflect/generics/tree/TypeVariableSignature.d.ts'
import type { VoidDescriptor } from '../../../../sun/reflect/generics/tree/VoidDescriptor.d.ts'
import type { Wildcard } from '../../../../sun/reflect/generics/tree/Wildcard.d.ts'
export interface TypeTreeVisitor<T extends Object | number | string | boolean> extends Object{
    getResult(): T;
    visitArrayTypeSignature(arg0: ArrayTypeSignature): void;
    visitBooleanSignature(arg0: BooleanSignature): void;
    visitBottomSignature(arg0: BottomSignature): void;
    visitByteSignature(arg0: ByteSignature): void;
    visitCharSignature(arg0: CharSignature): void;
    visitClassTypeSignature(arg0: ClassTypeSignature): void;
    visitDoubleSignature(arg0: DoubleSignature): void;
    visitFloatSignature(arg0: FloatSignature): void;
    visitFormalTypeParameter(arg0: FormalTypeParameter): void;
    visitIntSignature(arg0: IntSignature): void;
    visitLongSignature(arg0: LongSignature): void;
    visitShortSignature(arg0: ShortSignature): void;
    visitSimpleClassTypeSignature(arg0: SimpleClassTypeSignature): void;
    visitTypeVariableSignature(arg0: TypeVariableSignature): void;
    visitVoidDescriptor(arg0: VoidDescriptor): void;
    visitWildcard(arg0: Wildcard): void;
}