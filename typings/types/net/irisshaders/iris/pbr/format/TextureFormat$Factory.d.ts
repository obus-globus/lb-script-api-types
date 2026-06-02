import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureFormat } from '../../../../../net/irisshaders/iris/pbr/format/TextureFormat.d.ts'
export interface TextureFormat$Factory extends Object{
    createFormat(arg0: string, arg1: string): TextureFormat;
}