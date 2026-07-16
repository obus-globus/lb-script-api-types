import type { Object } from '../../../java/lang/Object.d.ts'
export class Intrinsics extends Object {
    static areEqual(paramarg0: number, paramarg1: number): boolean;
    static areEqual(paramarg0: Object, paramarg1: Object): boolean;
    static checkExpressionValueIsNotNull(paramarg0: Object, paramarg1: string): void;
    static checkFieldIsNotNull(paramarg0: Object, paramarg1: string): void;
    static checkFieldIsNotNull(paramarg0: Object, paramarg1: string, paramarg2: string): void;
    static checkHasClass(paramarg0: string): void;
    static checkHasClass(paramarg0: string, paramarg1: string): void;
    static checkNotNull(paramarg0: Object): void;
    static checkNotNull(paramarg0: Object, paramarg1: string): void;
    static checkNotNullExpressionValue(paramarg0: Object, paramarg1: string): void;
    static checkNotNullParameter(paramarg0: Object, paramarg1: string): void;
    static checkParameterIsNotNull(paramarg0: Object, paramarg1: string): void;
    static checkReturnedValueIsNotNull(paramarg0: Object, paramarg1: string): void;
    static checkReturnedValueIsNotNull(paramarg0: Object, paramarg1: string, paramarg2: string): void;
    static compare(paramarg0: number, paramarg1: number): number;
    static needClassReification(): void;
    static needClassReification(paramarg0: string): void;
    static reifiedOperationMarker(paramarg0: number, paramarg1: string): void;
    static reifiedOperationMarker(paramarg0: number, paramarg1: string, paramarg2: string): void;
    static stringPlus(paramarg0: string, paramarg1: Object): string;
    static throwAssert(): void;
    static throwAssert(paramarg0: string): void;
    static throwIllegalArgument(): void;
    static throwIllegalArgument(paramarg0: string): void;
    static throwIllegalState(): void;
    static throwIllegalState(paramarg0: string): void;
    static throwJavaNpe(): void;
    static throwJavaNpe(paramarg0: string): void;
    static throwNpe(): void;
    static throwNpe(paramarg0: string): void;
    static throwUndefinedForReified(): void;
    static throwUndefinedForReified(paramarg0: string): void;
    static throwUninitializedProperty(paramarg0: string): void;
    static throwUninitializedPropertyAccessException(paramarg0: string): void;
    private constructor()
}