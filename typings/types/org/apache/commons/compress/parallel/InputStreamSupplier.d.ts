import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InputStreamSupplier extends Object{
    get(): InputStream;
}