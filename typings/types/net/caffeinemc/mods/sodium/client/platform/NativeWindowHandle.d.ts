import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NativeWindowHandle extends Object{
    getWin32Handle(): number;
}