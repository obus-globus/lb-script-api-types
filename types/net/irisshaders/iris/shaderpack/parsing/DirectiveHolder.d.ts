import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector3i } from '../../../../../org/joml/Vector3i.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export interface DirectiveHolder extends Object{
    acceptCommentFloatDirective(arg0: string, arg1: (param0: number) => void): void;
    acceptCommentIntDirective(arg0: string, arg1: (param0: number) => void): void;
    acceptCommentStringDirective(arg0: string, arg1: (param0: string) => void): void;
    acceptConstBooleanDirective(arg0: string, arg1: (param0: boolean) => void): void;
    acceptConstFloatDirective(arg0: string, arg1: (param0: number) => void): void;
    acceptConstIVec3Directive(arg0: string, arg1: (param0: Vector3i) => void): void;
    acceptConstIntDirective(arg0: string, arg1: (param0: number) => void): void;
    acceptConstStringDirective(arg0: string, arg1: (param0: string) => void): void;
    acceptConstVec2Directive(arg0: string, arg1: (param0: Vector2f) => void): void;
    acceptConstVec4Directive(arg0: string, arg1: (param0: Vector4f) => void): void;
    acceptUniformDirective(arg0: string, arg1: () => void): void;
}