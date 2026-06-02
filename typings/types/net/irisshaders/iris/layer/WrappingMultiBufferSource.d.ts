import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export interface WrappingMultiBufferSource extends Object{
    assertWrapStackEmpty(): void;
    popWrappingFunction(): void;
    pushWrappingFunction(arg0: (param0: RenderType) => RenderType): void;
}