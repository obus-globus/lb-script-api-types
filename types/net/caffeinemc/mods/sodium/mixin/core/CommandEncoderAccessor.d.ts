import type { CommandEncoderBackend } from '../../../../../../com/mojang/blaze3d/systems/CommandEncoderBackend.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CommandEncoderAccessor extends Object{
    sodium$getBackend(): CommandEncoderBackend;
}