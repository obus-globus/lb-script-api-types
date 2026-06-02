import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AeadResult extends Object{
    getOutputStream(): OutputStream;
    setIv(arg0: number[]): AeadResult;
    setTag(arg0: number[]): AeadResult;
}