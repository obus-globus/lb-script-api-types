import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { PageFormat } from '../../../java/awt/print/PageFormat.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Printable extends Object{
    print(arg0: Graphics, arg1: PageFormat, arg2: number): number;
}