import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InputStreamFactory extends Object{
    getInputStream(): InputStream;
}